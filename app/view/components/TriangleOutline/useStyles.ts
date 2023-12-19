import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AppThemeContext} from '../../providers/AppTheme';

export default function useStyles() {
  const theme = useContext(AppThemeContext);

  return StyleSheet.create({
    triangleOutline: {
      position: 'absolute',
      top: 50,
      left: 150,
    },
  });
}
