import React, {memo, useContext, useEffect} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
  cancelAnimation,
  withSequence,
} from 'react-native-reanimated';
import styles from './styles';
import {LayoutChangeEvent, Text} from 'react-native';
import {TOAST_LIFETIME_DURATION} from '../config';
import {AppThemeContext} from '../../AppTheme';

const PRESENTATION_DURATION = 300;
const HIDE_DURATION = 700;

interface Props {
  message: string;
  index: number;
  toastsLength: SharedValue<number>;
}

function Toast({message, index, toastsLength}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  const scale = useSharedValue<number>(0.7);
  const opacity = useSharedValue<number>(0);
  const height = useSharedValue<number>(0);
  const activeToast = useSharedValue<boolean>(true);

  useEffect(() => {
    scale.value = withTiming(1, {duration: PRESENTATION_DURATION});
    opacity.value = withSequence(
      withTiming(1, {duration: PRESENTATION_DURATION}),
      withDelay(
        TOAST_LIFETIME_DURATION - PRESENTATION_DURATION - HIDE_DURATION - 100,
        withTiming(0, {duration: HIDE_DURATION}),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value + (height.value > 0 ? 8 : 0), {
        duration: PRESENTATION_DURATION,
      }),
    };
  }, [height]);

  const toastAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{scale: scale.value}],
    };
  }, [scale, opacity]);

  function handleLayout(event: LayoutChangeEvent): void {
    height.value = event.nativeEvent.layout.height;
  }

  useDerivedValue(() => {
    if (toastsLength.value !== 0 && index === toastsLength.value - 2 && activeToast.value) {
      activeToast.value = false;
      cancelAnimation(opacity);
      opacity.value = withDelay(
        PRESENTATION_DURATION + 200,
        withTiming(0, {duration: HIDE_DURATION}),
      );
    }
  }, [toastsLength]);

  return (
    <Animated.View style={[styles.container, {zIndex: 999 - index}, containerAnimatedStyle]}>
      <Animated.View
        style={[styles.toast, {backgroundColor: theme.C15}, toastAnimatedStyle]}
        onLayout={handleLayout}
      >
        <Text style={[styles.message, {color: theme.C12}]}>{message}</Text>
      </Animated.View>
    </Animated.View>
  );
}

export default memo(Toast);
