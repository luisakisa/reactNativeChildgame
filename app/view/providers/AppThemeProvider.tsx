import React, {PropsWithChildren} from 'react';
import {StatusBar} from 'react-native';
import AppTheme from './AppTheme';
import {themes} from '../themes';
import { useSelector } from 'react-redux';
import { Redux } from 'store';

export const AppThemeProvider = (props: PropsWithChildren): JSX.Element => {
  const {theme} = useSelector(Redux.Selectors.UserProperties.getState);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <AppTheme selectedTheme={theme} customThemes={themes}>
        {props.children}
      </AppTheme>
    </>
  );
};
