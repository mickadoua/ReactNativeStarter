import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from "../screens/Home/Home";
import {connect} from "react-redux";
import Result from "../screens/Result/Result";
import ProductPage from "../screens/Product/ProductPage";



const RootStackNavigator = StackNavigator(
    {
        ProductPage: {
            screen: ProductPage,
        },
        Home: {
            screen: Home,
        },
        Result: {
            screen: Result,
        },

    },
    {headerMode: 'none'}
);
class RootNavigator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <RootStackNavigator/>;
    }


}

//container
const mapStateToProps = (state) => {
    return {
        server: state.server
    }
};
const mapDispatchToProps = (dispatch) => {
    return {

    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps //Actions
)(RootNavigator)