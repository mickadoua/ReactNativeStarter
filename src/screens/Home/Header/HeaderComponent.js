import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import {Text} from "native-base";
import style from "./style";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <Text> Header </Text>
            </View>
        )
    }
}

HeaderComponent.propTypes = {
    foo: PropTypes.string.isRequired
};



export default HeaderComponent