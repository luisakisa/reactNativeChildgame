import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AppThemeContext} from '../../providers/AppTheme';

export default function useStyles() {
  const theme = useContext(AppThemeContext);

  return StyleSheet.create({
    square: {
      width: 100,
      height: 100,
      backgroundColor: theme.C5,
      position: 'absolute',
    },
  });
}
