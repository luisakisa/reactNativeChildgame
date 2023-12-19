import React from 'react';
import useStyles from './useStyles';
import {StyleProp, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export default function Triangle({style}:Props) {
  const styles = useStyles();

  return <View style={[styles.triangle, style]} />;
}
