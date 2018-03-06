import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Card from "../Card";
import CardSection from "../Cardsection";
import SwipeRow from "../SwipeRow";

export default class TestSwipeRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            damping: 1-0.7,
            tension: 300
        };
        // const { title, artist } = this.props;
    }
    render() {
        
        const { 
            exerciseDetail, 
            exerciseIndicator, 
            iconContainerStyle,
            exDetailTextStyle
            } = styles;
        return (
            <CardSection> 
                <SwipeRow damping={this.state.damping} tension={this.state.tension}> 
                    {/* <View style={exerciseIndicator}>
                        <Image source={require("../../util/mat_exercises/icon_mat_3_lg.png")} style={{flex:1, width:undefined, height:undefined, resizeMode:"contain"}} />
                    </View> */}
                        <Text> 
                            T
                        </Text>
                        <View style={exerciseDetail}> 
                            <Text style={exDetailTextStyle}>{this.props.title}</Text>
                            <Text>{this.props.artist}</Text>
                        </View>
                </SwipeRow>
            </CardSection>
        )
    }
}

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