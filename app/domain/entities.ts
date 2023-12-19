export interface Level {
  figures: string[];
  commonColor?: boolean;
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
