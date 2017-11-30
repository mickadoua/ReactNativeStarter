import actionTypes from "redux-localstorage/src/actionTypes";

const actions = {};
const reducers = {};
const selectors = {};
const ACTION_PREPEND = 'my-react-app/chips';

const SET_FAVORITE_CHIPS = `${ACTION_PREPEND}/SET_FAVORITE_CHIPS`;
reducers.favorite = (state = 'unknown', action) => {
    switch(action.type) {
        case actionTypes.INIT:
            return !!action.payload  ? action.payload.chips.favorites : state;

        case SET_FAVORITE_CHIPS: return action.newFav;
        default: return state;
    };
};
actions.setFavoriteChips = (newFav) => {
    return {
        type: SET_FAVORITE_CHIPS,
        newFav
    };
};
selectors.getFavoriteChips = (chipsState) => chipsState.favorite;

const SET_CHIPS_FOR_SALE = `${ACTION_PREPEND}/SET_CHIPS_FOR_SALE`;
reducers.chipsForSale = (state = [], action) => {
    switch(action.type) {
        case SET_CHIPS_FOR_SALE: return action.chips;
        default: return state;
    };
};
actions.setChipsForSale = (chips) => {
    return {
        type: SET_CHIPS_FOR_SALE,
        chips
    };
};
selectors.getChipsForSale = (chipsState) => chipsState.chips;

export default { actions, reducers, selectors };