import React, { Component } from "react";
import { 
    Stylesheet,
    View, 
    Image, 
    Animated, 
    TouchableOpacity,
    TouchableHighlight, 
    Dimensions, 
    Slider 
} from "react-native";
import Interactable from "react-native-interactable";
import {Trash } from "../util/icons";

const Screen = Dimensions.get("window");

class SwipeRow extends Component {
    constructor(props) {
        super(props);
        this._deltaX = new Animated.Value(0);
        this.state = {isMoving: false, position: 1};
      }
      render() {
        const activeOpacity = this.state.position !== 1 ? 0.5 : 1;
        return (
          <View style={{backgroundColor: '#de6d77', flex: 1}}>
    
            <View style={{position: 'absolute', right: 0, height: 75, flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={[styles.button]} onPress={this.onButtonPress.bind(this, 'trash')}>
                <Animated.Image source={require("../util/img/icon-trash.png")} style={
                  [styles.buttonImage, {
                    opacity: this._deltaX.interpolate({
                      inputRange: [-150, -115],
                      outputRange: [1, 0],
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp'
                    }),
                    transform: [{
                      scale: this._deltaX.interpolate({
                        inputRange: [-150, -115],
                        outputRange: [1, 0.7],
                        extrapolateLeft: 'clamp',
                        extrapolateRight: 'clamp'
                      })
                    }]
                  }
                ]} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button]} onPress={this.onButtonPress.bind(this, 'info')}>
                <Animated.Image source={require("../util/img/ic_info_outline_white_48pt.png")} style={
                  [styles.buttonImage, {
                    opacity: this._deltaX.interpolate({
                      inputRange: [-75, -50],
                      outputRange: [1, 0],
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp'
                    }),
                    transform: [{
                      scale: this._deltaX.interpolate({
                        inputRange: [-75, -50],
                        outputRange: [1, 0.7],
                        extrapolateLeft: 'clamp',
                        extrapolateRight: 'clamp'
                      })
                    }]
                  }
                ]} />
              </TouchableOpacity>
            </View>
    
            <View style={{position: 'absolute', left: 0, height: 75, flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={[styles.button]} onPress={this.onButtonPress.bind(this, 'done')}>
                <Animated.Image source={require("../util/img/icon-check.png")} style={
                  [styles.buttonImage, {
                    opacity: this._deltaX.interpolate({
                      inputRange: [50, 75],
                      outputRange: [0, 1],
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp'
                    }),
                    transform: [{
                      scale: this._deltaX.interpolate({
                        inputRange: [50, 75],
                        outputRange: [0.7, 1],
                        extrapolateLeft: 'clamp',
                        extrapolateRight: 'clamp'
                      })
                    }]
                  }
                ]} />
              </TouchableOpacity>
            </View>
    
            <Interactable.View
              ref={el => this.interactableElem = el}
              horizontalOnly={true}
              snapPoints={[
                {x: 75, damping: 1-this.props.damping, tension: this.props.tension},
                {x: 0, damping: 1-this.props.damping, tension: this.props.tension},
                {x: -150, damping: 1-this.props.damping, tension: this.props.tension}
              ]}
              onSnap={this.onSnap.bind(this)}
              onDrag={this.onDrag.bind(this)}
              onStop={this.onStopMoving.bind(this)}
              dragToss={0.01}
              animatedValueX={this._deltaX}>
              <TouchableHighlight onPress={this.onRowPress.bind(this)} activeOpacity={activeOpacity} underlayColor={'#dddddd'}>
                <View style={{left: 0, right: 0, height: "100%", backgroundColor: "white"}}>
                  {this.props.children}
                </View>
              </TouchableHighlight>
            </Interactable.View>
    
          </View>
        );
      }
      onSnap({nativeEvent}) {
        const { index } = nativeEvent;
        this.setState({position: index});
      }
      onRowPress() {
        const { isMoving, position } = this.state;
        if (!isMoving && position !== 1) {
          this.interactableElem.snapTo({index: 1});
        }
      }
      onDrag({nativeEvent}) {
        const { state } = nativeEvent;
        if (state === 'start') {
          this.setState({isMoving: true});
        }
      }
      onStopMoving() {
        this.setState({isMoving: false});
      }
      onButtonPress(name) {
        alert(`Button ${name} pressed`);
      }
    }

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white'
      },
      rowContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eeeeee'
      },
      rowIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#73d4e3',
        margin: 20
      },
      rowTitle: {
        fontWeight: 'bold',
        fontSize: 20
      },
      rowSubtitle: {
        fontSize: 18,
        color: 'gray'
      },
      button: {
        width: 75,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      },
      buttonImage: {
        width: 40,
        height: 40
      },
      playground: {
        marginTop: Screen.height <= 500 ? 0 : 80,
        padding: 20,
        width: Screen.width - 40,
        backgroundColor: '#5894f3',
        alignItems: 'stretch',
        alignSelf: 'center'
      },
      playgroundLabel: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15
      },
      slider: {
        height: 40
    }
}

export default SwipeRow;