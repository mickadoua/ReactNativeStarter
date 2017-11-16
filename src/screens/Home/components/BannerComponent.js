import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types';
import {Text} from "native-base";

var {height, width} = Dimensions.get("window");

class BannerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text> banner </Text>
            </View>
        )
    }
}

BannerComponent.propTypes = {
    foo: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: width - 20,
        backgroundColor: '#7123CD',
        marginTop: 10,
        borderRadius: 10,

    }
});

export default BannerComponent