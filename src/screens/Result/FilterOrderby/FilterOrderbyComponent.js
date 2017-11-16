import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View } from 'react-native'

import style from './style'
import {Button, Text} from "native-base";

class FilterOrderbyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <Button style={style.button} onPress={() => console.log('Filter')}>
                    <Text>Filter</Text>
                </Button>
                <Button style={style.button} onPress={() => console.log('Trier')}>
                    <Text>Trier par</Text>
                </Button>
            </View>
        )
    }
}


FilterOrderbyComponent.protoType = {
    onPress: PropTypes.func
}

export default FilterOrderbyComponent