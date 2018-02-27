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

const HeaderNav = (props) => {
    // const styles = {stateContainer, stateText};
    return (
        <View style={styles.stateContainer}>
            <Back />
            <Text style={styles.stateText}>{props.navigateTo} </Text>
        </View>
    )
}

styles = StyleSheet.create({
    stateContainer: {
        flex: 1,
        flexDirection: "row",
        height: 72,
        justifyContent: "flex-start",
        paddingLeft: 31,
        alignItems: "center"
    },
    stateText: {
        fontSize: 25,
        marginLeft: 15,
        marginRight: 15,
        color: "#4C527C",
    }
})

export default HeaderNav;