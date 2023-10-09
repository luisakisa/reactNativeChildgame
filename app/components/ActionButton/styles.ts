import {StyleSheet} from 'react-native';
import FontStyles from './../../constants/FontStyles';

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: FontStyles.Headline17Semibold,
  fixedToBottom: {
    position: 'absolute',
    left: 16,
    right: 16,
  },
});

export default styles;
