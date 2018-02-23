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
  View,
  Image
} from 'react-native';
import { Avatar, Header } from 'react-native-elements';
import {HorizontalLine, Back} from "../../util/icons";

export default class HeaderComponent extends Component{
    render(){
      return(
        <View style={styles.headerContainer}>
            <View style={styles.stateContainer}>
                <Back />
                <Text style={styles.stateText}>Client List </Text>
            </View>
            <View style={styles.logoContainer}> 
                <View style={styles.indexLogoContainer}> 
                <Image source={require('./img/logo.png')} style={{flex:0.9, width:undefined, height:undefined, resizeMode:"contain"}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerTitle}> Emerald City Pilates</Text>
                </View>
            </View>
            <View style={styles.userContainer}>
                <Text style={styles.stateText}>Emily </Text>
                <View style={styles.userPic}>
                    <Avatar
                        large
                        rounded
                        title="E"
                        //icon={{name: "user"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    
headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 4,
    marginTop: 18

},
stateContainer: {
    flex: 1,
    flexDirection: "row",
    height: 72,
    justifyContent: "flex-start",
    paddingLeft: 31,
    alignItems: "center"
},
logoContainer: {
    flex: 2,
    flexDirection: "row",
    height: 72,
    marginLeft: 5,
    marginRight: 5
    
},
userContainer: {
    flex: 1,
    height: 72,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 31,
    alignItems: "center"
},
indexLogoContainer: {
    flex: 6,
    height: 72,
    marginLeft: 1,
    marginRight: 1

},
textContainer: {
    flex: 9,
    height: 72,
    marginLeft: 1,
    marginRight: 1,
    justifyContent: "center",
    borderLeftWidth: 3,
    borderColor: "#4C527C"
},
headerTitle: {
    color: "#4C527C",	
    //fontFamily: "Modern Era TRIAL",
    fontFamily: "Arial",	
    fontSize: 25,
    fontWeight: "900",
    textAlign: "left",
    textAlignVertical: "center",
    justifyContent: "space-around"
},
stateText: {
    fontSize: 25,
    marginLeft: 15,
    marginRight: 15,
    color: "#4C527C",
},
userPic: {
    width: 72,
    height: 72,
    backgroundColor: "skyblue",
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center"

}

});
AppRegistry.registerComponent("HeaderComponent", () => HeaderComponent);