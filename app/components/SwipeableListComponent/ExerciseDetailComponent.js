import React from "react";
import { View, Text, Image } from "react-native";
import Card from "../Card";
import CardSection from "../Cardsection";


const ExerciseDetail = ({ album }) => {
    const { title, artist } = album;
    const { 
        exerciseDetail, 
        exerciseIndicator, 
        iconContainerStyle,
        exDetailTextStyle
        } = styles;
    return(
            
            <CardSection>
                <View style={exerciseIndicator}>
                    <Image source={require("../../util/mat_exercises/icon_mat_3_lg.png")} style={{flex:1, width:undefined, height:undefined, resizeMode:"contain"}} />
                </View>
                <View style={exerciseDetail}> 
                    <Text style={exDetailTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                
            </CardSection>
    )

};

const styles = {
    exerciseDetail: {
        flexDirection: "column",
        justifyContent: "space-around"
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

export default ExerciseDetail;