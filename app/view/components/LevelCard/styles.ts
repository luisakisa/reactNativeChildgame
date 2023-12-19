import {StyleSheet} from 'react-native';
import FontStyles from 'constants/FontStyles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 100,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...FontStyles.Title28Bold,
    marginBottom: 8,
    marginRight: '20%',
  },
  levelText: {
    ...FontStyles.Caption12Medium,
    marginBottom: 4,
  },
  bottomContentContainer: {
    marginTop: 'auto',
    alignSelf: 'stretch',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  iconContainer: {
    aspectRatio: 1,
    borderRadius: 999,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(106, 107, 117, 0.35)',
    marginRight: 8,
  },
  statusInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusInfoText: {
    ...FontStyles.Caption12Medium,
    width: 0,
    flexGrow: 1,
  },
  startCourseText: {
    ...FontStyles.Headline17Semibold,
    marginLeft: 8,
  },
  startCourseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 12,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    borderRadius: 999,
    marginBottom: -8,
  },
});

export default styles;
