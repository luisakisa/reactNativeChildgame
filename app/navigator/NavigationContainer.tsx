import {
  DefaultTheme,
  NavigationContainer as ReactNavigationContainer,
} from '@react-navigation/native';
import React, {useContext} from 'react';
import {AppThemeContext} from '../providers/AppTheme';

interface Props {
  children: React.ReactNode;
}

export default function NavigationContainer({
  children,
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  const navigationContainerTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.C1,
    },
  };

  return (
    <ReactNavigationContainer theme={navigationContainerTheme}>
      {children}
    </ReactNavigationContainer>
  );
}
