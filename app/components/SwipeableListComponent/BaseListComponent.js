import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View,  TouchableOpacity } from 'react-native';
import { List, ListItem } from "react-native-elements";
import axios from 'axios';
import ExerciseDetail from "./ExerciseDetailComponent";
import Card from "../Card";

class BaseListComponent extends Component {
    state = { 
            albums: []
        };

    componentWillMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then(response => this.setState({albums: response.data}));
    }
    renderAlbums(){
       return this.state.albums.map(album => 
            <ExerciseDetail key={album.title} album={album} />
        );
    }
    
    render(){
        console.log(this.state);
        return(
            <Card headerTitle={<Text>Workout Plan </Text>} footer={<Text> Write a note ... </Text>}>
                {this.renderAlbums()}
            </Card>
        )
    }
}


// skip this line if using Create React Native App
export default BaseListComponent;