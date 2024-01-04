import {DefaultTheme} from './providers/AppTheme/DefaultThemes/type';

export enum ThemeName {
  light = 'light',
  dark = 'dark',
  deepRose = 'deepRose',
  aqua = 'aqua',
  night = 'night',
}

export interface Theme extends Partial<DefaultTheme> {
  [key: string]: string | number | undefined;
  C0: string;
  C1: string;
  C2: string;
  C3: string;
  C4: string;
  C5: string;
  C6: string;
  C8: string;
  C9: string;
  C10: string;
  C11: string;
  C12: string;
  C13: string;
  C14: string;
  C15: string;
  C17: string;
  C18: string;
  C19: string;
  C20: string;
  C21: string;
  C22: string;
  C23: string;
  C24: string;
  C25: string;
  C26: string;
  C34: string;
  R0: string;
  R1: string;
  R4: string;
  R5: string;
  R6: string;
  R7: string;
  R8: string;
  R9: string;
  R10: string;
  R11: string;
  R12: string;
  R15: string;
  R20: string;
  S1: string;
  S2: string;
  S3: string;
}

const LightTheme: Theme = {
  C0: '#000000',
  C1: '#5C00D0',
  C2: '#5300BB',
  C3: '#FFFFFF',
  C4: 'rgba(255,255,255,0.75)',
  C5: '#F386B0',
  C6: '#FFB8E7',
  C8: '#34C759',
  C9: '#FFFFFF',
  C10: '#5300BB',
  C11: '#000000',
  C12: '#5300BB',
  C13: 'rgba(0, 0, 0, 0.12)',
  C14: '#5300BB',
  C15: '#FFFFFF',
  C17: 'rgba(83, 0, 187, 0.94)',
  C18: 'rgba(255, 255, 255, 0.4)',
  C19: '#FFFFFF',
  C20: 'rgba(8, 13, 51, 0.32)',
  C21: '#FFCD29',
  C22: 'rgba(243, 134, 176, 0.2)',
  C23: 'rgba(111, 202, 241, 0.2)',
  C24: 'rgba(8, 13, 51, 0.16)',
  C25: 'rgba(8, 13, 51, 0.32)',
  C26: '#5300BB',
  C34: '#E9E9F1',
  R0: '#5C00D0',
  R1: '#080D33',
  R4: '#E8AF4C',
  R5: '#E9C669',
  R6: '#DA018A',
  R7: 'rgba(255, 255, 255, 0.12)',
  R8: '#181719',
  R9: '#34C759',
  R10: '#FFD600',
  R11: '#00A3FF',
  R12: '#E8499F',
  R15: '#2A0C73',
  R20: '#0D001E',
  S1: '#251716',
  S2: '#080A33',
  S3: '#181B4F',
};

export const themes: {[key: string]: Theme} = {
  [ThemeName.light]: LightTheme,
  [ThemeName.dark]: {
    ...LightTheme,
    C0: '#FFFFFF',
    C1: '#29246A',
    R0: '#0F1A3C',
    C2: '#373289',
    C6: '#FFAAAA',
    C10: '#373289',
    C12: '#373289',
    C13: 'rgba(255, 255, 255, 0.08)',
    C14: '#373289',
    C17: 'rgba(26, 30, 79, 0.94)',
    C22: 'rgba(255, 98, 158, 0.2)',
    C23: 'rgba(111, 102, 255, 0.2)',
    C24: 'rgba(8, 13, 51, 0.24)',
    C25: 'rgba(8, 13, 51, 0.8)',
    C26: '#373289',
  },
  [ThemeName.deepRose]: {
    ...LightTheme,
    C1: '#9F278E',
    R0: '#6B1056',
    C2: '#631351',
    C6: '#F4D4EA',
    C10: '#631351',
    C12: '#631351',
    C13: 'rgba(255, 255, 255, 0.08)',
    C14: '#631351',
    C17: 'rgba(129, 26, 109, 0.94)',
    C22: 'rgba(243, 134, 176, 0.2)',
    C23: 'rgba(90, 176, 255, 0.28)',
    C24: 'rgba(0, 0, 0, 0.12)',
    C25: 'rgba(8, 13, 51, 0.48)',
    C26: '#9F278E',
  },
  [ThemeName.aqua]: {
    ...LightTheme,
    C1: '#2498BF',
    R0: '#2375A7',
    C2: '#0A6B8A',
    C6: '#E4E9EA',
    C10: '#0A6B8A',
    C12: '#0A6B8A',
    C13: 'rgba(0, 0, 0, 0.12)',
    C14: '#0A6B8A',
    C17: 'rgba(31, 108, 152, 0.94)',
    C22: 'rgba(255, 183, 211, 0.34)',
    C23: 'rgba(137, 220, 255, 0.3)',
    C24: 'rgba(8, 13, 51, 0.16)',
    C25: 'rgba(8, 13, 51, 0.48)',
    C26: '#0A6B8A',
  },
  [ThemeName.night]: {
    ...LightTheme,
    C1: '#232224',
    R0: '#181719',
    C2: '#2A292B',
    C6: '#FFAAAA',
    C10: '#2A292B',
    C12: '#2A292B',
    C13: 'rgba(42, 41, 43, 1)',
    C14: '#2A292B',
    C17: 'rgba(30, 29, 31, 0.94)',
    C20: 'rgba(3, 3, 7, 0.32)',
    C22: 'rgba(243, 134, 134, 0.2)',
    C23: 'rgba(0, 133, 255, 0.2)',
    C24: 'rgba(0, 0, 0, 0.16)',
    C25: 'rgba(136, 136, 136, 0.32)',
    C26: '#2A292B',
  },
};
