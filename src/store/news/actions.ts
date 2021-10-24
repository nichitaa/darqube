import {Dispatch} from 'redux';
import {LOCAL_STORAGE_KEY, NewsAction, NewsActionTypes} from './types';
import {convertDate, search, showMessage, updateBookmark} from '../../utils';
import {ApplicationState} from '../createRootReducer';
import {AppleApiService} from '../../services/api';
import {INews} from '../../types/news';

export const fetchNewsAction = () => async (dispatch: Dispatch<NewsAction>) => {
    try {
        dispatch({type: NewsActionTypes.NEWS_REQUEST});

        const api = AppleApiService.getInstance();
        let news = await api.fetchNews();
        if (!news.error) {
            news = news.sort((x: any, y: any) => new Date(y.datetime * 1000).valueOf() - new Date(x.datetime * 1000).valueOf());

            let temp: INews[];

            const storageBookmarks = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storageBookmarks) {
                const bookmarks = JSON.parse(storageBookmarks);
                temp = news.map((el: any, i: number) => {
                    const found = bookmarks.find((f: any) => f === el.id);
                    return {
                        ...el,
                        isLatest: i === 0,
                        isBookmark: !!found,
                        datetime: convertDate(el.datetime)
                    };
                });
            } else {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
                temp = news.map((el: any, i: number) => ({
                    ...el,
                    isLatest: i === 0,
                    isBookmark: false,
                    datetime: convertDate(el.datetime)
                }));
            }
            dispatch({type: NewsActionTypes.UPDATE_NEWS, payload: temp});
            dispatch({type: NewsActionTypes.UPDATE_DISPLAYED_NEWS, payload: temp});
        } else {
            showMessage('error', news.error, 5);
            dispatch({type: NewsActionTypes.NEWS_REQUEST_ERROR, payload: news.error});
        }
    } catch (err: any) {
        dispatch({type: NewsActionTypes.NEWS_REQUEST_ERROR, payload: err.message});
    }
};

export const onNewsResetSearchAction = () => (dispatch: Dispatch<NewsAction>, getState: () => ApplicationState) => {
    const {news: {news}} = getState();
    dispatch({type: NewsActionTypes.UPDATE_DISPLAYED_NEWS, payload: news});
};

export const onNewsSearchAction = (key: string) => (dispatch: Dispatch<NewsAction>, getState: () => ApplicationState) => {
    const {router: {location}} = getState();
    const {news: {news}} = getState();

    const searchString = key.toLowerCase();
    switch (location.pathname) {
        case '/': {
            const found = search(news, searchString);
            dispatch({type: NewsActionTypes.UPDATE_DISPLAYED_NEWS, payload: found});
            break;
        }
        case '/bookmarks': {
            const bookmarks = news.filter(el => el.isBookmark);
            const found = search(bookmarks, searchString);
            dispatch({type: NewsActionTypes.UPDATE_DISPLAYED_NEWS, payload: found});
            break;
        }
        default:
            return false;
    }
};

export const updateBookmarkAction = (id: number, bool: boolean) => (dispatch: Dispatch<NewsAction>, getState: () => ApplicationState) => {
    const storageBookmarks = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (bool) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...JSON.parse(storageBookmarks!), id]));
    } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...JSON.parse(storageBookmarks!).filter((el: number) => el !== id)]));
    }

    const {news: {news, displayedNews}} = getState();
    const tempNews = updateBookmark(news, id, bool);
    const tempDisplayed = updateBookmark(displayedNews, id, bool);

    dispatch({type: NewsActionTypes.UPDATE_DISPLAYED_NEWS, payload: tempDisplayed});
    dispatch({type: NewsActionTypes.UPDATE_NEWS, payload: tempNews});
};