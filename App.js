/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./app/reducers";
import HeaderComponent from "./app/components/HeaderComponent/headerComponent";
import BaseListComponent from "./app/components/SwipeableListComponent/BaseListComponent";
import ExerciseList from "./app/components/ExerciseList";

/* Nice to know. 
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */

export default class premiumtimes extends Component{
    render(){
      return(
        <Provider store={createStore(reducers)}>
          <View style={{flex: 1, flexDirection:"column", alignItems:"center"}}>
              <View style={{flex: 1, flexDirection: "row"}}>
                <HeaderComponent />
              </View>
              <View style={{flex: 5, flexDirection: "row"}}>
                <ExerciseList />
                <BaseListComponent />                
              </View>
          </View>
        </Provider>
      );
    }
}

AppRegistry.registerComponent("premiumtimes", () => premiumtimes);