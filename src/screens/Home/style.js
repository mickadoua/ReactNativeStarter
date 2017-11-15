import React from "react";
import { StyleSheet, Dimensions } from "react-native";

var {height, width} = Dimensions.get("window");


export default StyleSheet.create({
    gallery:{
        position: 'absolute',
        bottom: 35,
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: "#FFF",
        left: (((width - 70 ) / 2  ) - 60) /  2
    },
    galleryImage:{
        width: 56,
        height: 56,
    },
    cameraChange:{
        position: 'absolute',
        backgroundColor: 'transparent',
        bottom: 49,
        height: 32,
        width: 32,
        right: (((width - 70 ) / 2  ) - 32) /  2
    },
    snapBtn: {
        position: 'absolute',
        bottom: 30,
        overflow: 'hidden',
        borderRadius: 50,
        width: 70,
        height: 70,
        left: (width - 70 ) / 2
    },
    snapBtnGradient:{
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 7,
        borderColor: "#FFF",
    },
    flashLayer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFFa'
    }
})
