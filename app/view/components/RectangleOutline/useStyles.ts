import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AppThemeContext} from '../../providers/AppTheme';

export default function useStyles() {
  const theme = useContext(AppThemeContext);

  return StyleSheet.create({
    squareOutline: {
      width: 90,
      height: 110,
      borderWidth: 5,
      borderColor: theme.C5,
      position: 'absolute',
      top: 50, // Расположение контура на экране
      left: 250,
    },
  });
}
