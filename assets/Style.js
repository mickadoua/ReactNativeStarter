import {Dimensions, StyleSheet, Platform} from 'react-native'
import Colors from "./Colors";

const {width} = Dimensions.get('window');
export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 20
    },
})
