import {ViewStyle} from 'react-native';

const ShadowStyles = {
  Component: {
    shadowColor: 'black',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
  },
};

export default ShadowStyles as Record<keyof typeof ShadowStyles, ViewStyle>;
