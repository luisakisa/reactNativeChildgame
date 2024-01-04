export interface Level {
  figures: string[];
  commonColor?: boolean;
}


export enum ThemeName {
  light = 'light',
  dark = 'dark',
  deepRose = 'deepRose',
  aqua = 'aqua',
  night = 'night',
}

export class Player {
  age: number;
  id: number;
  level: number;
  name: string;
  constructor(age: number, id: number, level: number, name: string) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.level = level;
  }
}
