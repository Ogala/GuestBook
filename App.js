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
import HeaderComponent from "./app/components/HeaderComponent/headerComponent";
import BaseListComponent from "./app/components/SwipeableListComponent/BaseListComponent"

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
        <View style={{flex: 1, flexDirection:"column", alignItems:"center"}}>
            <View style={{flex: 1, flexDirection: "row"}}>
              <HeaderComponent />
            </View>
            <View style={{flex: 5, flexDirection: "row"}}>
        
              <BaseListComponent />
              <BaseListComponent />
            </View>
        </View>
      );
    }
}

AppRegistry.registerComponent("premiumtimes", () => premiumtimes);