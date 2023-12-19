import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AppThemeContext} from '../../providers/AppTheme';

export default function useStyles() {
  const theme = useContext(AppThemeContext);

  return StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      borderLeftWidth: 50,
      borderRightWidth: 50,
      borderBottomWidth: 100,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: theme.C15,
      position: 'absolute',
    },
  });
}
