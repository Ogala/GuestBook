import React from "react";
import { View, Text} from "react-native";

const Card = ( {children, headerTitle, footer} ) => {

    const {titleTextStyle, listHead, containerStyle, listItemContainer, listFooter} = styles;
    return (
        <View style={containerStyle} > 
            <View style={listHead}> 
                <Text style={titleTextStyle}>{headerTitle}</Text>
            </View>
            
            <View style={listItemContainer}> 
                {children}
            </View>

            <View style={ listFooter }> 
                {footer}
            </View>
        </View>
        
  
        
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "ghostwhite",
        margin: 5,
        minWidth: 468,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 1,
    },
    listHead: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#4c527c",
        justifyContent: "center",
        alignItems: "center",
        
    },
    listItemContainer: {
        flex: 7,
        flexDirection: "column",
        backgroundColor: "#fdfdfd"
    },
    listFooter: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderColor: "#CBCBCB",
        alignItems: "center",
        paddingLeft: 20
    },
    titleTextStyle: {
        fontSize: 36,
        color: "#fdfdfd",
        fontWeight: "bold",
       
    }

}

export default Card;