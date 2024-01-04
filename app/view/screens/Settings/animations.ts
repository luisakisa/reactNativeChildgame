import {Extrapolation, interpolate, SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface Props {
  translationY: SharedValue<number>;
}

interface State {
  header: StyleProp<ViewStyle>;
  headerText: StyleProp<TextStyle>;
  title: StyleProp<TextStyle>;
}

export default function useAnimations({translationY}: Props): State {
  const header = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [5, 10], [0, 1], Extrapolation.CLAMP),
    };
  }, [translationY.value]);

  const headerText = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [5, 10], [0, 1], Extrapolation.CLAMP),
    };
  }, [translationY.value]);

  const title = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [0, 10], [1, 0], Extrapolation.CLAMP),
    };
  }, [translationY.value]);

  return {header, headerText, title};
}
