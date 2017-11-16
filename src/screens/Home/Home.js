import React from 'react';
import {connect} from "react-redux";
import {pickActions, selectors} from "../../state/index";
import HomeComponent from "./HomeComponent";

//container
const mapStateToProps = (state) => {
    return {
        favorites: selectors.getUserFavorites(state)
    }
};


export default connect(
    mapStateToProps,
    pickActions('setFavoriteChips')
)(HomeComponent)
