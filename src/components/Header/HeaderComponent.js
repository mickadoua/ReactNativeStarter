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

class HeaderComponent extends Component { //todo change header style, info
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <Left>
                    {this.props.IconLeft &&
                    <Button transparent>

                    </Button>}
                </Left>
                <Body>
                <Title style={{ color: "#555", fontSize: 16, fontWeight: "400" }}>
                    Serrupro
                </Title>
                </Body>
                <Right>
                    {this.props.IconRight &&
                    <Button transparent>

                    </Button>}
                </Right>
            </Header>
        )
    }
}

HeaderComponent.propTypes = {
    pageTitle: PropTypes.string,
};

/*
HeaderComponent.propTypes = {
/*    pageTitle: PropTypes.string,
    pageSubTitle: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    route: PropTypes.string,
}*/
export default HeaderComponent