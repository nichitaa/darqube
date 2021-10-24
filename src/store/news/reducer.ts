import {Reducer} from 'react';
import {INewsState, NewsAction, NewsActionTypes} from './types';

export const initialState: INewsState = {
    news: [],
    displayedNews: [],
    loading: false,
    error: undefined
};


export const reducer: Reducer<INewsState, NewsAction> = (state = initialState, action) => {
    switch (action.type) {
        case NewsActionTypes.NEWS_REQUEST:
            return {...state, loading: true};
        case NewsActionTypes.NEWS_REQUEST_ERROR:
            return {...state, loading: false, error: action.payload};
        case NewsActionTypes.UPDATE_NEWS:
            return {...state, loading: false, news: action.payload};
        case NewsActionTypes.UPDATE_DISPLAYED_NEWS:
            return {...state, displayedNews: action.payload};
        default:
            return {...state};
    }
};

export {reducer as newsReducer};


