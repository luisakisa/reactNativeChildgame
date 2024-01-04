import React, {useContext} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import styles from './styles';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeName, themes} from 'view/themes';
import {AppThemeContext} from 'view/providers/AppTheme';

interface Props {
  themeName: ThemeName;
  locked?: boolean;
  selected: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: (themeName: ThemeName) => void;
}

export default function ThemeRadioButton({
  themeName,
  locked = false,
  selected,
  style,
  onPress,
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  const checkAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(selected ? 1 : 0, {
        duration: 160,
        easing: Easing.quad,
      }),
    };
  }, [selected]);

  return (
    <Pressable
      accessibilityLabel={'ThemeRadioButton'}
      onPress={() => onPress(themeName)}
      style={[styles.container, {backgroundColor: theme.C2}, style]}
      hitSlop={4}>
      <View
        style={[
          styles.colorCircle,
          styles.accentColorCircle,
          {backgroundColor: themes[themeName].C6},
        ]}
      />
      <LinearGradient
        colors={[themes[themeName].C1, themes[themeName].R0]}
        style={styles.colorCircle}
      />
      <Text numberOfLines={1} style={[styles.title, {color: theme.C3}]}>
        {themeName}
      </Text>
      <View style={styles.checkContainer}>
        <View style={[styles.checkBackground, {backgroundColor: theme.C9}]} />
        <Animated.View
          style={[
            styles.check,
            {backgroundColor: theme.C9},
            checkAnimatedStyle,
          ]}
        />
      </View>
    </Pressable>
  );
}
