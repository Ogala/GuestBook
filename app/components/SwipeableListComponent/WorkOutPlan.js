import React, { Component } from 'react';
import { Text } from "react-native";
import Card from "../Card";
import ListItem from "../ListItem";

class WorkOutPlan extends Component {
    state = { 
            exercises: []
        };

    
    renderExercises(){
       return (
        <ListItem key={exercise.title} exercise={exercise}/>
        
       );
    }
    
    render(){
        return(
            <Card headerTitle={<Text>Workout Plan </Text>} footer={<Text> Write a note ... </Text>}>
                {this.renderExercises()}
            </Card>
        )
    }
}


// skip this line if using Create React Native App
export default WorkOutPlan;