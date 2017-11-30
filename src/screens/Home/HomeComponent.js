import React from 'react';
import {Dimensions, Modal, ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import {Container, Content, Header, Title} from "native-base";
import {pickActions, selectors} from "../../state/index";
import PropTypes from 'prop-types';
import style from "./style";

const {width} = Dimensions.get('window');
export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            promptVisible: false,
        };
    }
    render() {
        return (
            <Container style={style.container}>
                <Header>
                    <Title>StartApp</Title>
                </Header>
                <Content>
                <Text> My fav chips is {this.props.favorites.chips} My fav drink is {this.props.favorites.drink} </Text>
                <Text> this.props.setFavoriteChips('')</Text>
                </Content>
            </Container>

        );
    }

}


Home.propType = {
    foo: PropTypes.object
};

Home.defaultProps = {
    foo: false
};