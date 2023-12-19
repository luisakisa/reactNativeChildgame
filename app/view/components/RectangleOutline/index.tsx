import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import useStyles from './useStyles';

interface Props {
  style: StyleProp<ViewStyle>;
}

export default function RectangleOutline({style}: Props) {
  const styles = useStyles();

  return <View style={[styles.squareOutline, style]} />;
}
