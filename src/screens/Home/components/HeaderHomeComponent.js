import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types';
import {Text} from "native-base";

var {height, width} = Dimensions.get("window");

class HeaderHomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Header </Text>
            </View>
        )
    }
}

HeaderHomeComponent.propTypes = {
  foo: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: width,
        backgroundColor: '#012436'

    }
});


export default HeaderHomeComponent