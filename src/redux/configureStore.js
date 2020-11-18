import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Posts } from './posts';

import logger from 'redux-logger';
import thunk from 'redux-thunk';



/* this initializes redux store at app start
    we need to attach the reducers which make state changes, and initialize the form fields and state
    this passes action creators (fetch, loading indicators, etc) etc to all components that are children of Provider
*/

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            posts: Posts,
        }), applyMiddleware(thunk, logger)
    );

    return store;
}