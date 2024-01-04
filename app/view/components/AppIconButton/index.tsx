import React, {useContext} from 'react';
import {Image, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import { AppThemeContext } from 'view/providers/AppTheme';

interface Props {
  image: number;
  onPress: () => void;
  showLock: boolean;
  isActive: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function AppIconButton({
  image,
  showLock,
  isActive,
  onPress,
  style,
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  return (
    <TouchableOpacity
      accessibilityLabel={'AppIconButton'}
      onPress={onPress}
      style={[
        styles.container,
        isActive ? [styles.activeBorder, {backgroundColor: theme.C9}] : styles.inactiveBorder,
        style,
      ]}
      activeOpacity={0.9}
    >
      <Image source={image} style={[styles.image, isActive && styles.activeImage]} />
    </TouchableOpacity>
  );
}
