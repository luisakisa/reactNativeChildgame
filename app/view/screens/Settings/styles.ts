import FontStyles from 'constants/FontStyles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  firstGroup: {
    marginTop: 8,
  },
  header: {
    position: 'absolute',
    ...FontStyles.Title34Bold,
    left: 0,
    right: 0,
    top: 0,
  },
  headerText: {
    ...FontStyles.Headline20Semibold,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  title: {
    ...FontStyles.Title34Bold,
    marginBottom: 24,
  },
});

export default styles;
