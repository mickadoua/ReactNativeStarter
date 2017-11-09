import React from 'react';
import {StackNavigator} from 'react-navigation';
import ServerConfiguration from "../screens/ServerConfigurationScreen";
import ButtonConfiguration from "../screens/ButtonConfiguration";
import Home from "../screens/Home/Home";
import {connect} from "react-redux";
import IntroductionScreen from "../screens/IntroductionScreen";

/*
const ConfigurationStackNavigator = StackNavigator(
    {
        Introduction: {
            screen: IntroductionScreen,
        }

    },
    {headerMode: 'none'}
);
*/



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
/*        const { server } = this.props;
        if(server.ip !== "")*/
            return <RootStackNavigator/>;
/*        else
            return <ConfigurationStackNavigator/> */
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