import createStore from 'modular-redux-thunk';
import {AsyncStorage} from 'react-native';
import * as globalActions from './actions.js';
import * as globalSelectors from './selectors.js';

import {createLogger} from "redux-logger";
import {applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import persistState from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/AsyncStorage';
import chips from "./chips";
import drinks from "./drinks";

const storage = adapter(AsyncStorage);
const modules = {chips, drinks};
const globals = {
    globalActions: globalActions,
    globalSelectors: globalSelectors
};

const loggerMiddleware = createLogger();
const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    persistState(storage, 'myStorage')
);
const { store, selectors, pickActions, actions } = createStore(modules, globals, {enhancers: [enhancer]});

export { store, selectors, pickActions, actions };