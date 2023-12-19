import {StyleSheet} from 'react-native';
import {AppThemeContext} from '../../providers/AppTheme';
import {useContext} from 'react';

export default function useStyles() {
  const theme = useContext(AppThemeContext);

  return StyleSheet.create({
    circleOutline: {
      width: 105,
      height: 105,
      borderRadius: 999,
      borderWidth: 5,
      borderColor: theme.C8,
      position: 'absolute',
      top: 50, // Расположение контура на экране
    },
  });
}
