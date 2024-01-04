import React, {useContext, useMemo} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import styles from './styles';
import {AppThemeContext} from '../../providers/AppTheme';

interface Props {
  title?: string;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export default function RowButtonsGroup({
  title,
  style,
  children,
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  const titleSpecified = useMemo(() => (title?.length ?? 0) > 0, [title]);

  return (
    <>
      {titleSpecified && <Text style={[styles.title, {color: theme.C4}]}>{title}</Text>}
      <View
        style={[
          styles.container,
          {backgroundColor: theme.C2, marginTop: titleSpecified ? 6 : 24},
          style,
        ]}
      >
        {children}
      </View>
    </>
  );
}
