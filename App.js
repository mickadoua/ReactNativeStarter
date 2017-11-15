import React from 'react';
import {StatusBar, StyleSheet, View, AsyncStorage, Platform} from 'react-native';
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";
import {applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import persistState from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/AsyncStorage';
import { store, selectors, pickActions } from './src/state';
import RootNavigation from "./src/navigation/RootNavigation";
import {AppLoading} from "expo";

const storage = adapter(AsyncStorage);


const loggerMiddleware = createLogger();
const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    persistState(storage, 'myStorage')
);

//const store = createStore(myApp, enhancer);


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
            'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
        });
    }




}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 0 : 24,
        flex: 1,
    },
});
