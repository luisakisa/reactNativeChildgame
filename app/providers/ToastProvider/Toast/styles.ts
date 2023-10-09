import {StyleSheet} from 'react-native';
import FontStyles from '../../../constants/FontStyles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  toast: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 0,
    padding: 12,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.84,
    elevation: 5,
  },
  message: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    ...FontStyles.Subheadline15Regular,
  },
});

export default styles;
