import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from "../screens/Home/Home";
import {connect} from "react-redux";



const RootStackNavigator = StackNavigator(
    {
        Home: {
            screen: Home,
        }

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