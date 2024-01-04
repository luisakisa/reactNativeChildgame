import React, {useContext} from 'react';
import {Text, StyleProp, ViewStyle, Pressable, ActivityIndicator, View} from 'react-native';
import styles from './styles';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {SvgProps} from 'react-native-svg';
import { AppThemeContext } from 'view/providers/AppTheme';

interface Props {
  Icon?: React.FC<SvgProps>;
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  isLoading?: boolean;
  color?: string;
  disabled?: boolean;
}

export default function RowButton({
  Icon,
  title,
  onPress,
  style,
  children,
  isLoading = false,
  color,
  disabled = false,
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  const pressed = useSharedValue(false);
  const pressedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(pressed.value ? 0.7 : 1, {duration: 150}),
    };
  });

  function handlePressIn(): void {
    pressed.value = true;
  }

  function handlePressOut(): void {
    pressed.value = false;
  }

  return (
    <Pressable
      accessibilityLabel={'RowButton'}
      style={[styles.container, style]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      hitSlop={{left: 16, right: 16}}
      disabled={isLoading || disabled}
    >
      <Animated.View style={[styles.iconAndTitleContainer, pressedStyle]}>
        {Icon && (
          <View style={styles.iconContainer}>
            <Icon fill={color ?? theme.C3} />
          </View>
        )}
        <Text style={[styles.title, {color: color ?? theme.C3}]}>{title}</Text>
      </Animated.View>

    </Pressable>
  );
}
