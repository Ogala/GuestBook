import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import CardSection from "./Cardsection";
import Interactable from "react-native-interactable";
import SwipeRow from "./SwipeRow";

// const Screen = Dimenensions.get("window");
 
const ListItem = ({ exercise }) => {
    const {title, level } = exercise;
    const {
        exerciseIndicator, 
        exerciseDetail,
        exDetailTextStyle,
        rowContent 
    } = styles;   
    /**
     * When we can fetch data from server, we will replace the icon uri with each exercise's uri
     */
    return(
        <CardSection >
            <SwipeRow damping={1-0.7} tension={300}> 
                <View style={rowContent}> 
                    <View style={exerciseIndicator}>
                        <Image source={require("../util/mat_exercises/icon_mat_3_lg.png")} style={{flex:1, width:undefined, height:undefined, resizeMode:"contain"}} />
                    </View>
                    <View style={exerciseDetail}> 
                        <Text style={exDetailTextStyle}>{title}</Text>
                        <Text style={{marginTop: 0, fontSize: 16 }}>{level}</Text>
                    </View>
                </View>
                
            </SwipeRow>
            
        </CardSection>
    )
             
}

const styles = {
    rowContent: {
        flex: 1,
        flexDirection: "row",
        height: "100%"
    },
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
        alignSelf: "baseline"
    },
    exerciseIndicator: {
        flexDirection: "row",
        height: "100%",
        width: 70,
        marginLeft: 15,
        marginRight: 15
    },
}

export default ListItem;