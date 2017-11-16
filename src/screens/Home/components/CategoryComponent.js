import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import PropTypes from 'prop-types';
import {Text} from "native-base";

var {height, width} = Dimensions.get("window");


class CategoryComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    alignSelf: 'center',
                    marginTop: 50
                }}> {this.props.name} </Text>
            </View>
        )
    }
}

CategoryComponent.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        height: width / 2 - 20,
        width: width / 2 - 20,
        margin: 5, //todo change by space

        borderRadius: 10,
        backgroundColor: '#FF0000'

    }
});

export default CategoryComponent