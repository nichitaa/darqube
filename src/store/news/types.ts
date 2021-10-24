import {INews} from '../../types/news';

export enum NewsActionTypes {
    NEWS_REQUEST = '@@NEWS/NEWS_REQUEST',
    NEWS_REQUEST_ERROR = '@@NEWS/NEWS_REQUEST_ERROR',
    UPDATE_NEWS = '@@NEWS/UPDATE_NEWS',
    UPDATE_DISPLAYED_NEWS = '@@NEWS/UPDATE_DISPLAYED_NEWS'
}

export type NewsAction = {
    type: NewsActionTypes,
    payload?: any
}

export interface INewsState {
    news: INews[],
    displayedNews: INews[],
    loading: boolean,
    error: undefined | string
}

export const LOCAL_STORAGE_KEY = 'news-bookmarks';