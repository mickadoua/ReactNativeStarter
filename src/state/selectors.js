export const getUserFavorites = (selectors, state) => {
    console.log('selectors, state', selectors, state)
    return {
        chips: selectors.getFavoriteChips(state),
        drink: selectors.getFavoriteDrink(state)
    }
};