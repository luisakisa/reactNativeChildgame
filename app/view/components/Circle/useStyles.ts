import {StyleSheet} from 'react-native';
import {AppThemeContext} from '../../providers/AppTheme';
import {useContext} from 'react';

export default function useStyles() {
  const theme = useContext(AppThemeContext);

  return StyleSheet.create({
    circle: {
      width: 100,
      height: 100,
      borderRadius: 999,
      backgroundColor: theme.C8,
      position: 'absolute',
    },
  });
}
