import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {styles} from './styles';

interface Props {
  style: StyleProp<ViewStyle>;
}

export default function SquareOutline({style}: Props) {
  return <View style={[styles.squareOutline, style]} />;
}
