import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';
import ExerciseProgressItem, {
  ExerciseProgressItemStatus,
} from './ExerciseProgressItem';

export interface Props {
  totalCount?: number;
  completedCount: number;
  actualCount?: number;
  style?: StyleProp<ViewStyle>;
}

export default function ExercisesProgress({
  totalCount,
  completedCount,
  actualCount = 0,
  style,
}: Props): React.FunctionComponentElement<Props> {
  return (
    <View style={[styles.container, style]}>
      {Array(totalCount)
        .fill('')
        .map((item, index) => {
          return (
            <ExerciseProgressItem
              key={`exercise-progress-item-${index}`}
              title={index + 1}
              status={
                index + 1 <= completedCount
                  ? ExerciseProgressItemStatus.completed
                  : index + 1 <= actualCount
                  ? ExerciseProgressItemStatus.actual
                  : ExerciseProgressItemStatus.notCompleted
              }
            />
          );
        })}
    </View>
  );
}
