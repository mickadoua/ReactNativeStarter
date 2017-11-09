import {createSelector} from "reselect";
import {actionTypes as localStorageActionType} from 'redux-localstorage'
import ActionType from "./ActionType";
//import * as reducer from './'


export const initialState = {
    pages: [] //...
};

export default (state = initialState, action) => {
    switch (action.type) {
        case (localStorageActionType.INIT):


            if(!action.payload)
                return state;
            return {...state, ...action.payload};


        case ActionType.ADD:    //example...
            return {...state, pages: [...state.pages, []]};


        default:
            return state
    }
}
