import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  triangleOutline: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'green',
    position: 'absolute',
    top: 50, // Расположение контура на экране
    left: 150,
  },
});
