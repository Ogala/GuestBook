import React from "react";
import { View, Text } from "react-native";
import Card from "../Card";
import CardSection from "../Cardsection";

import { Icon } from 'react-native-elements';

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
                <View style={iconContainerStyle}>
                    <Icon 
                        containerStyle={exerciseIndicator}
                        name="dumbbell"
                        type="material-community" 
                    />
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
        justifyContent: "space-around",
        height: 50,
        width: 50,
        margin: 4
    },
    iconContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    
}

export default ExerciseDetail;