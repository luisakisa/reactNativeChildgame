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
  },
  iconsScroll: {
    marginHorizontal: -16,
    marginBottom: 40,
  },
  iconsScrollContainer: {
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  groupTitle: {
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  firstGroupTitle: {
    marginTop: 6,
  },
});

export default styles;
