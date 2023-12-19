import React, {useContext} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import styles from './styles';
import {AppThemeContext} from 'view/providers/AppTheme';
import Icons from 'view/assets/Icons';

export enum ExerciseProgressItemStatus {
  completed,
  actual,
  notCompleted,
}

export interface Props {
  title: number;
  status: ExerciseProgressItemStatus;
  style?: StyleProp<ViewStyle>;
}

export default function ExerciseProgressItem({
  title,
  status,
  style,
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  function renderIcon(): React.ReactNode {
    switch (status) {
      case ExerciseProgressItemStatus.actual:
        return (
          <View style={[styles.actualIcon, {borderColor: theme.C3}]}>
            <View
              style={[styles.actualIconInner, {backgroundColor: theme.C3}]}
            />
          </View>
        );
      case ExerciseProgressItemStatus.completed:
        return <Icons.Checkmark fill={theme.C8} />;
      case ExerciseProgressItemStatus.notCompleted:
        return (
          <View style={[styles.notCompletedIcon, {borderColor: theme.C4}]} />
        );
    }
  }

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.title,
          {
            color:
              status === ExerciseProgressItemStatus.notCompleted
                ? theme.C4
                : theme.C3,
          },
        ]}>
        {title}
      </Text>
      {renderIcon()}
    </View>
  );
}
