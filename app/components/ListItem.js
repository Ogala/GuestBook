import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import CardSection from "./Cardsection";

const ListItem = ({ exercise }) => {
    const {title, level } = exercise;
    const {
        exerciseIndicator, 
        exerciseDetail,
        exDetailTextStyle 
    } = styles;   
    /**
     * When we can fetch data from server, we will replace the icon uri with each exercise's uri
     */
    return(
        <CardSection style={{flex:1}}>
            <View style={exerciseIndicator}>
                <Image source={require("../util/mat_exercises/icon_mat_3_lg.png")} style={{flex:1, width:undefined, height:undefined, resizeMode:"contain"}} />
            </View>

            <View style={exerciseDetail}> 
                <Text style={exDetailTextStyle}>{title}</Text>
                <Text style={{marginTop: 0, fontSize: 16 }}>{level}</Text>
            </View>
    
        </CardSection>
    )
             
}

const styles = {
    exerciseDetail: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    exDetailTextStyle:{
        fontSize: 28,
        color: "#4c527c",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    exerciseIndicator: {
        flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100%",
        width: 70,
        marginLeft: 15,
        marginRight: 15
    },
    iconContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    
}

export default ListItem;