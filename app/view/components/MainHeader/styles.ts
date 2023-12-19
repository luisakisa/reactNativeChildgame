import FontStyles from 'constants/FontStyles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  title: {
    ...FontStyles.Title34Bold,
    marginRight: 'auto',
  },
  button: {
    aspectRatio: 1,
    borderRadius: 999,
    height: 32,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    opacity: 0.6,
  },
});

export default styles;
