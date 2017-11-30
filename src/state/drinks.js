import { combineModules, settableValue } from 'modular-redux-thunk';
import actionTypes from "redux-localstorage/src/actionTypes";
const actions = {};
const reducers = {};
const selectors = {};
const ACTION_PREPEND = 'my-react-app/drinks';

// You can also define individual modules and combine them
const SET_FAVORITE_DRINK = `${ACTION_PREPEND}/SET_FAVORITE_DRINK`;
const favorite = {
    reducer: (state = 'unknown', action) => {
        switch(action.type) {
            case actionTypes.INIT:
                return !!action.payload  ? action.payload.drinks.favorite : state;

            case SET_FAVORITE_DRINK: return action.newFav;
            default: return state;
        };
    },
    actions: {
        setFavoriteDrink: (newFav) => ({
            type: SET_FAVORITE_DRINK,
            newFav
        })
    },
    selectors: {
        getFavoriteDrink: (favoriteDrinkState) => favoriteDrinkState
    }
}

// Or even use a module creator function to automate this common pattern
const drinksForSale = settableValue([], 'getDrinksForSale', 'setDrinksForSale');

export default combineModules({
    favorite,
    drinksForSale
});