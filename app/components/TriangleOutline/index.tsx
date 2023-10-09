import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';

interface Props {
  style: StyleProp<ViewStyle>;
}

export default function TriangleOutline({style}: Props) {
  return (
    <View style={[styles.triangleOutline, style]}>
      <Svg height="105" width="105">
        <Polygon
          points="5,100 50,5 100,100"
          fill="transparent"
          stroke="green"
          strokeWidth="5"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  triangleOutline: {
    position: 'absolute',
    top: 50,
    left: 150,
  },
});
