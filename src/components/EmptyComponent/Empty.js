import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types';

import style from './style'
import {Text} from "native-base";

class Empty extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[style.container, this.props.style]}>
                <Text>
                    Empty
                </Text>
            </View>
        )
    }
}

Empty.propType = {
    style: PropTypes.object
};

Empty.defaultProps = {
    foo: false
};

export default Empty