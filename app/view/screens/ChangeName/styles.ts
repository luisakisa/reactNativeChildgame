import FontStyles from 'constants/FontStyles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  input: {
    paddingVertical: 16,
    marginHorizontal: 16,
    textAlignVertical: 'top',
    ...FontStyles.Headline20Semibold,
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
