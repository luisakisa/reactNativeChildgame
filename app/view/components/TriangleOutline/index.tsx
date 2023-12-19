import React, {useContext} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';
import {AppThemeContext} from 'view/providers/AppTheme';
import useStyles from './useStyles';

interface Props {
  style: StyleProp<ViewStyle>;
}

export default function TriangleOutline({style}: Props) {
  const theme = useContext(AppThemeContext);

  const styles = useStyles();

  return (
    <View style={[styles.triangleOutline, style]}>
      <Svg height="105" width="105">
        <Polygon
          points="5,100 50,5 100,100"
          fill="transparent"
          stroke={theme.C15}
          strokeWidth="5"
        />
      </Svg>
    </View>
  );
}
