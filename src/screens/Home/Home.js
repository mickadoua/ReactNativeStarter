import React from 'react';
import {Dimensions, FlatList, Modal, ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import {Container, Content, Header, Title} from "native-base";
import {pickActions, selectors} from "../../state/index";
import SearchbarComponent from "./components/SearchbarComponent";
import CategoryComponent from "./components/CategoryComponent";
import BannerComponent from "./components/BannerComponent";
import style from "./style";
import HeaderHomeComponent from "./components/HeaderHomeComponent";

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
                <HeaderHomeComponent/>
                <Content
                    padder
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={true}
                >
                    <SearchbarComponent/>

                    <FlatList
                        numColumns={2}
                        contentContainerStyle={style.categories}
                        style={style.listWrapper}
                        data={['verrous',1,2,3,4,5]} // this.props.projects
                        renderItem={({item}) =>  <CategoryComponent key={item} name={item} />}
                    />

                    <BannerComponent />
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
)(Home)
