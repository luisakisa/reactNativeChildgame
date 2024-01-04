import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    marginBottom: 8,
    marginHorizontal: 12,
  },
  activeBorder: {
    padding: 2,
  },
  inactiveBorder: {
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    padding: 1,
    marginHorizontal: 13,
  },
  image: {
    borderRadius: 13,
    overflow: 'hidden',
    height: 60,
    aspectRatio: 1,
  },
  activeImage: {
    borderRadius: 12,
  },
  lock: {
    position: 'absolute',
    bottom: -8,
    right: -8,
  },
});

export default styles;
