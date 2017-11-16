import React from 'react';
import {Dimensions, FlatList, Modal, ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import {Container, Content, H1} from "native-base";
import {pickActions, selectors} from "../../state/index";
import Header from "../../components/Header/Header";
import PropTypes from 'prop-types';
import style from "./style";
import ProductCard from "../../components/ProductCard/ProductCard";

const {width} = Dimensions.get('window');
class Result extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            promptVisible: false,
        };
    }
    render() {
        return (
            <Container>
                <Header />
                <Content
                    padder>
                    <H1>Serrures</H1>
                   {/* <FilterOrderbyComponent/> todo fix it*/}
                    <FlatList
                        numColumns={1}
                        contentContainerStyle={style.categories}
                        keyExtractor={(item, index) => index}
                        style={style.listWrapper}
                        data={[1,2,3,4,5]} // this.props.projects

                        renderItem={({item}) =>  <ProductCard key={item} onPress={() => console.log('productCard')} />}
                    />

                </Content>
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
)(Result)
