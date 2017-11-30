import React from 'react';
import {StatusBar, StyleSheet, View, AsyncStorage, Platform} from 'react-native';
import {Provider} from "react-redux";
import { store } from './src/state';
import RootNavigation from "./src/navigation/RootNavigation";
import {AppLoading} from "expo";


export default class App extends React.Component {
    state = { fontsAreLoaded: false };

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#F00" //todo dont work
                    translucent={false}
                    barStyle="dark-content"
                />
                <Provider store={store}>
                    <RootNavigation/>
                </Provider>
            </View>
        );
    }

    async _cacheResourcesAsync() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
        });
    }




}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 0 : 24,
        flex: 1,
    },
});
