import createStore from 'modular-redux-thunk';

import chips from './chips.js';
import drinks from './drinks.js';
import * as globalActions from './actions.js';
import * as globalSelectors from './selectors.js';

const modules = {chips, drinks};

const globals = {
    globalActions: globalActions,
    globalSelectors: globalSelectors
};

const { store, selectors, pickActions } = createStore(modules, globals);
console.log('store', store)
console.log('selectors, ', selectors )
console.log('pickActions', pickActions )
export { store, selectors, pickActions };