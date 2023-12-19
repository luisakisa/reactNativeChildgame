import React, {PropsWithChildren} from 'react';
import {StatusBar} from 'react-native';
import AppTheme, {CustomThemeContext, AppThemeContext} from './AppTheme';
import {themes} from '../themes';

export const AppThemeProvider = (props: PropsWithChildren): JSX.Element => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <AppTheme selectedTheme={'light'} customThemes={themes}>
        {props.children}
      </AppTheme>
    </>
  );
};
