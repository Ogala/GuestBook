import React, { Component } from "react";
import { View, TextInput, Text, Image } from "react-native";
import Search from "../util/icons/Search";



class SearchComponent extends Component{
    constructor(props) {
        super(props);
        this.state= {
            text: "Search"
        }
    }

    render(){
        const { textContainer, searchBox, searchIcon} = styles;
        console.log(this.state);
        return (
            <View style={textContainer}>
                <View style={searchIcon}> 
                    <Search />
                </View>
                <TextInput 
                    style={searchBox}
                    onChangeText={(text) => this.setState({text})} // better implementation later
                    value={this.state.text}
                    returnKeyType={ "search" }
                />
           
            </View>
        );
    }
}

styles = {
    textContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.15,
        shadowRadius: 7,
        alignItems: "center"
        
    },
    searchBox: {
        flex: 1,
        backgroundColor: "white",
        alignSelf: "stretch",
        height: "100%",
        paddingLeft: 24,
        fontSize: 24,
        color: "#CBCBCB"
    },
    searchIcon: {
        height: 50,
        width: 50,
        marginLeft: 20

    }
}

export default SearchComponent;