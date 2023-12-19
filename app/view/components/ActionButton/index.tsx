import React, {useContext} from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppThemeContext} from 'view/providers/AppTheme';

interface Props {
  title: string;
  onPress: () => void;
  fixedToBottom?: boolean;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  mode?: 'light' | 'dark';
}

export default function ActionButton({
  title,
  onPress,
  fixedToBottom = false,
  disabled = false,
  textStyle,
  style,
  mode = 'dark',
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  const safeAreaInsets = useSafeAreaInsets();

  const disabledTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(disabled ? 0.48 : 1, {duration: 200}),
    };
  }, [disabled]);

  return (
    <TouchableOpacity
      accessibilityLabel={'ActionButton'}
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: mode === 'dark' ? theme.C6 : theme.C2},
        fixedToBottom && [
          styles.fixedToBottom,
          {bottom: safeAreaInsets.bottom + 16},
        ],
        style,
      ]}
      disabled={disabled}
      activeOpacity={0.9}>
      <Animated.Text
        style={[
          styles.title,
          {color: mode === 'dark' ? theme.C12 : theme.C6},
          disabledTitleStyle,
          textStyle,
        ]}
        numberOfLines={1}>
        {title}
      </Animated.Text>
    </TouchableOpacity>
  );
}
