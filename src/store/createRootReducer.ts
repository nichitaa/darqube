import {History} from 'history';
import {combineReducers} from 'redux';
import {connectRouter, RouterState} from 'connected-react-router';
import {INewsState} from './news/types';
import {newsReducer} from './news/reducer';


export interface ApplicationState {
    news: INewsState,
    router: RouterState;
}

const createRootReducer = (history: History) =>
    combineReducers({
        news: newsReducer,
        router: connectRouter(history)
    });

export default createRootReducer;