import React, {createContext, useEffect, useState} from 'react';
import DefaultThemes from './DefaultThemes';
import merge from 'lodash.merge';
import {DefaultTheme} from './DefaultThemes/type';

export type CustomThemeContext<T> = React.Context<DefaultTheme & T>;

export const AppThemeContext = createContext(DefaultThemes.light);

type ThemeProperty = string | number | undefined;

interface Themes {
  light: {[key: string]: ThemeProperty};
  dark: {[key: string]: ThemeProperty};
}

interface CustomThemes {
  [key: string]: {[key: string]: ThemeProperty};
}

interface Props<T extends CustomThemes> {
  selectedTheme: keyof Themes | keyof T;
  customThemes?: T;
  children: React.ReactNode;
}

function AppTheme<T extends CustomThemes>({
  selectedTheme = 'light',
  customThemes,
  children,
}: Props<T>): React.FunctionComponentElement<Props<T>> {
  const [themes] = useState<any>(merge(DefaultThemes, customThemes));
  const [theme, setTheme] = useState(themes[selectedTheme]);

  useEffect(() => {
    setTheme(themes[selectedTheme]);
  }, [selectedTheme, themes]);

  return (
    <AppThemeContext.Provider value={theme}>
      {children}
    </AppThemeContext.Provider>
  );
}

export default AppTheme;
