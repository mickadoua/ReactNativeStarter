export const setUserFavorites = (actions, favChips, favDrink) => {
    return function(dispatch) {
        dispatch(actions.setFavoriteChips(favChips));
        dispatch(actions.setFavoriteDrink(favDrink));
    };
};