import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View } from 'react-native'

import style from './style'

class Empty extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
            </View>
        )
    }
}


Empty.protoType = {
    onPress: PropTypes.func
}

export default Empty