import {I18nManager, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  iconAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    width: 0,
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    width: 0,
    flexGrow: 1,
    marginVertical: 6,
  },
  iconContainer: {
    marginRight: 16,
  },
  chevronContainer: {
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
});

export default styles;
