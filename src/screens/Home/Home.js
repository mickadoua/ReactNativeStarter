import React from 'react';
import {Dimensions, Modal, ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import {Container} from "native-base";

const {width} = Dimensions.get('window');
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            promptVisible: false,
        };
    }
    render() {
        return (
            <Container>

            </Container>

        );
    }

}

//container
const mapStateToProps = (state) => {
    //console.log('NEW STATE => ', state.pages)
    return {

    }
};
const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
