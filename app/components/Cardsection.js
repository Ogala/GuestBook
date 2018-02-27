import React from "react";
import { View, TouchableOpacity } from "react-native";


const CardSection = (props) => {

    return (
        <TouchableOpacity style={styles.containerStyle}> 
            {props.children}
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#fdfdfd",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: "#ddd",
        position: "relative",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.15,
        shadowRadius: 7,
        height: 90,
       
        
    }
}

export default CardSection;