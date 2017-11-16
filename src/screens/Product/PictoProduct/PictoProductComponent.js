import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View } from 'react-native'

import style from './style'
import {Text} from "native-base";

class PictoProductComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                {this.props.categories.map(c => (<Text> {c} </Text>)
                )}
            </View>
        )
    }
}


PictoProductComponent.protoType = {
    categories: PropTypes.array.isRequired
};

export default PictoProductComponent