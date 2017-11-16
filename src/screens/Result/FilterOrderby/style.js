import React from "react";
import { StyleSheet, Dimensions } from "react-native";

var {height, width} = Dimensions.get("window");


export default StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        width: 100,

    }
})
