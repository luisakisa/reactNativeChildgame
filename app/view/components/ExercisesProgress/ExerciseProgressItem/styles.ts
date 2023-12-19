import {StyleSheet} from 'react-native';
import FontStyles from '../../../constantsStyles/FontStyles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    ...FontStyles.Headline17Regular,
    marginBottom: 6,
  },
  notCompletedIcon: {
    aspectRatio: 1,
    height: 20,
    borderRadius: 999,
    borderWidth: 2,
  },
  actualIcon: {
    aspectRatio: 1,
    height: 20,
    borderRadius: 999,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actualIconInner: {
    aspectRatio: 1,
    height: 10,
    borderRadius: 999,
  },
});

export default styles;
