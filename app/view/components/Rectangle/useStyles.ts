import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AppThemeContext} from '../../providers/AppTheme';

export default function useStyles() {
  const theme = useContext(AppThemeContext);

  return StyleSheet.create({
    square: {
      width: 85,
      height: 105,
      backgroundColor: theme.C6,
      position: 'absolute',
    },
  });
}
