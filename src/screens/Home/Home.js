import React from 'react';
import {Dimensions, Modal, ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import {Container, Header, Title} from "native-base";
import {pickActions, selectors} from "../../state/index";

const {width} = Dimensions.get('window');
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            promptVisible: false,
        };
    }
    render() {
        return (
            <Container>
                <Header>
                    <Title>StartApp</Title>
                </Header>
                <Text> My fav chips is {this.props.favorites.chips} My fav drink is {this.props.favorites.drink} </Text>
                <Text> this.props.setFavoriteChips('')</Text>
            </Container>

        );
    }

}

//container
const mapStateToProps = (state) => {
    return {
        favorites: selectors.getUserFavorites(state)

    }
};


export default connect(
    mapStateToProps,
    pickActions('setFavoriteChips')
)(Home)
