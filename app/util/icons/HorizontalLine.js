import React, { Component } from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

 export default class HorizontalLine extends Component {
  render() {
     return (
       <Svg
              height="27"
              width="14"
          >
            <Line
                x1 = "10"
                y1 = "1"
                x2 = "10"
                y2 = "100"
                stroke="red"
                strokeWidth="10"

            />

          </Svg>
     );
 }
}