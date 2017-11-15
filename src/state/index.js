import createStore from 'modular-redux-thunk';

import chips from './chips.js';
import drinks from './drinks.js';
import * as globalActions from './Actions.js';
import * as globalSelectors from './Selectors.js';

const modules = {chips, drinks};

const globals = {
    globalActions: globalActions,
    globalSelectors: globalSelectors
};

const { store, selectors, pickActions } = createStore(modules, globals);
export { store, selectors, pickActions };