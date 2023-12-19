import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import useStyles from './useStyles';

interface Props {
  style: StyleProp<ViewStyle>;
}

export default function CircleOutline({style}: Props) {
  const styles = useStyles();

  return <View style={[styles.circleOutline, style]} />;
}
