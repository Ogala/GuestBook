import React , { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList } from "react-native";
import ListItem from "./ListItem";
import Card from "./Card";
import ExerciseDetail from "../components/SwipeableListComponent/ExerciseDetailComponent";

class ExerciseList extends Component {
    componentWillMount(){
        exerciseData = this.props.dataToShow;
    }
    renderListItem(item){
         
        return(
            <ListItem exercise={item} />
            
        );
    }
    renderExercises(){
       return(
        <FlatList 
            data={exerciseData}
            keyExtractor={ (item) => item.id }
            renderItem={({ item }) => (
                
                this.renderListItem( item )
                )}
        />
        );

    }

    render(){
        return(
            <Card headerTitle={<Text>Workout Plan </Text>} footer={<Text> Write a note ... </Text>}>
                {this.renderExercises()}
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { dataToShow: state.exercises};
    // console.log(dataToShow);

};

export default connect(mapStateToProps)(ExerciseList);