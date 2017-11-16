import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types';
import {Text} from "native-base";

var {height, width} = Dimensions.get("window");

class SearchbarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> searc </Text>
            </View>
        )
    }
}

SearchbarComponent.propTypes = {
    foo: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#CCC'

    }
});

export default SearchbarComponent