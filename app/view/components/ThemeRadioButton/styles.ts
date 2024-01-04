import FontStyles from 'constants/FontStyles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderRadius: 16,
    height: 72,
    marginBottom: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorCircle: {
    aspectRatio: 1,
    height: 40,
    borderRadius: 999,
  },
  accentColorCircle: {
    position: 'absolute',
    left: 32,
  },
  title: {
    marginLeft: 32,
    textTransform: 'capitalize',
    ...FontStyles.Headline17Medium,
    flexGrow: 1,
    width: 0,
    marginRight: 16,
  },
  checkContainer: {
    height: 24,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBackground: {
    borderRadius: 999,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  check: {
    borderRadius: 999,
    height: 12,
    aspectRatio: 1,
  },
});

export default styles;
