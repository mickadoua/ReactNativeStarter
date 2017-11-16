import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View } from 'react-native'

import style from './style'
import {Item, Picker} from "native-base";

class DropdownmodalComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[ style.container, this.props.style]}>
                <Picker
                    mode="dropdown"
                    placeholder="Select One"
                    note={false}
                    //selectedValue={this.state.selected2}
                    //onValueChange={this.onValueChange2.bind(this)}
                >
                    {this.props.items.map((i, index) => (<Item label={i} value={index} />))}

                </Picker>
            </View>
        )
    }
}


DropdownmodalComponent.protoType = {
    style: PropTypes.object,
    items: PropTypes.array.isRequired
}

export default DropdownmodalComponent