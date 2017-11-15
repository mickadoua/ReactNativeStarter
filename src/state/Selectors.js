export const getUserFavorites = (selectors, state) => {
    return {
        chips: selectors.getFavoriteChips(state),
        drink: selectors.getFavoriteDrink(state)
    }
};