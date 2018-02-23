import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View,  TouchableOpacity } from 'react-native';
import { List, ListItem } from "react-native-elements";

class BaseListComponent extends Component {

    constructor(props){
        super(props);

        this.state={ };
    }
    
    
    render(){
        return(
            <View style={styles.container}>
            <FlatList
              data={[
                {exercise: {
                    title: "Breathing",
                    level: 1
                }},
                {exercise: {
                    title: "Impring and Release",
                    level: 1
                }},
                {exercise: {
                    title: "Hip Release",
                    level: 3
                }},
                {exercise: {
                    title: "Head Nods",
                    level: 2
                }},
                {exercisekey: {
                    title: "Ab Prep",
                    level: 3
                }},
                {exercise: {
                    title: "Half roll Back",
                    level: 4
                }},
                {exercise: {
                    title: "Spine Twist",
                    level: 4
                }},
                {exercise: {
                    title: "Obliques",
                    level: 5
                }},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
// skip this line if using Create React Native App
export default BaseListComponent;