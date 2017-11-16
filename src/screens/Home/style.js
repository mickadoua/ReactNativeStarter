import React from "react";
import { StyleSheet, Dimensions } from "react-native";

var {height, width} = Dimensions.get("window");


export default StyleSheet.create({

    categories:{
        justifyContent: 'space-between', //dont work
        backgroundColor: '#97ff73',
    },

    listWrapper: {
        backgroundColor: '#60c6ff',
        flexDirection:'column',
    }
})
