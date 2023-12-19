import {StyleSheet} from 'react-native';
import FontStyles from '../../constantsStyles/FontStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  title: {
    marginTop: 'auto',
    alignSelf: 'stretch',
    textAlign: 'center',
    ...FontStyles.Title28Bold,
    marginBottom: 8,
  },
  description: {
    alignSelf: 'stretch',
    textAlign: 'center',
    ...FontStyles.Headline17Regular,
    marginBottom: 24,
  },
  exercisesProgress: {
    marginBottom: 42,
    marginHorizontal: 16,
  },
});

export default styles;
