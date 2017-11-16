import React, { Component } from 'react'
import { } from 'react-native'

import style from './style'
import {
    Container,
    Header,
    View,
    Title,
    Button,
    Left,
    Right,
    Body,
    Text,
    StyleProvider} from "native-base";
import {Icon} from "expo";
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {TouchableOpacity} from "react-native";


class ProductCardComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={style.container} onPress={this.props.onPress}>{/*redirect to product page*/}
                <Text>
                    product card
                </Text>
            </TouchableOpacity>
        )}
}

ProductCardComponent.protoType = {
    onPress: PropTypes.func
};

export default ProductCardComponent