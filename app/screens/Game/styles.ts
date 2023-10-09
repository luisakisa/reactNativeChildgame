import {StyleSheet} from 'react-native';
import FontStyles from './../../constants/FontStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  closeButton: {
    opacity: 0.72,
  },
  categoryText: {
    ...FontStyles.CaptionCaps13Bold,
    textTransform: 'uppercase',
  },
  title: {
    ...FontStyles.Headline20Bold,
    marginBottom: 4,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerImage: {
    height: 48,
    width: 48,
  },
});

export default styles;
