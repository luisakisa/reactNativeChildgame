import {DefaultTheme} from './providers/AppTheme/DefaultThemes/type';

export enum ThemeName {
  light = 'light',
}

export interface Theme extends Partial<DefaultTheme> {
  [key: string]: string | number | undefined;
  R1: string;
  R2: string;
  R3: string;
  R4: string;
  R5: string;
  R6: string;
  R7: string;
  R8: string;
  R9: string;
  R10: string;
}

export const themes: {[key: string]: Theme} = {
  [ThemeName.light]: {
    C0: '#000000',
    C1: '#5A3ECD',
    C2: '#785CEB',
    C3: '#FFFFFF',
    C4: 'rgba(255,255,255,0.7)',
    C5: '#FF858C',
    C6: '#FFFFFF',
    C7: '#000000',
    C8: '#6ED486',
    C9: '#FFFFFF',
    C10: '#9379FF',
    C11: '#000000',
    C12: '#1B1B22',
    C13: 'rgba(255,255,255,0.1)',
    C14: '#432AA9',
    R1: '#DCD6F5',
    R2: '#9E8DE1',
    R3: '#FF8158',
    R4: '#72DDFF',
    R5: '#DD4E58',
    R6: '#5FB7AD',
    R7: '#BE4DA0',
    R8: '#5A3ECD',
    R9: '#FF9500',
    R10: '#432AA9',
  },
};
