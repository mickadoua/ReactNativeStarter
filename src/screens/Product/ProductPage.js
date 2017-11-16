import React from 'react';
import {Dimensions, Modal, ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import {Container, Content, Title} from "native-base";
import {pickActions, selectors} from "../../state/index";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCardComponent from "../../components/ProductCard/ProductCardComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import DropdownmodalComponent from "../../components/DropdownModal/DropdownModalComponent";
import PictoProductComponent from "./PictoProduct/PictoProductComponent";
import style from "./style"
const {width} = Dimensions.get('window');


class ProductPage extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Container>
                <HeaderComponent />
                <Content>
                    <ProductCardComponent/>

                    <View style={style.dropdowns} >
                        <DropdownmodalComponent style={{flex:1}} items={['finition 1', 'finition 2', 'finition 3']}/>
                        <DropdownmodalComponent style={{flex:1}} items={['finition 1', 'finition 2', 'finition 3']}/>
                    </View>
                    <PictoProductComponent categories={['porte_dentree', 'en_applique', 'droite']}/>


                </Content>
            </Container>
        );
    }

}




//container
const mapStateToProps = (state) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    pickActions('setFavoriteChips')
)(ProductPage)
