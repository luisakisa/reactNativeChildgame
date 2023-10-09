import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './styles';

interface Props {
  style: StyleProp<ViewStyle>;
}

export default function CircleOutline({style}: Props) {
  return <View style={[styles.circleOutline, style]} />;
}
