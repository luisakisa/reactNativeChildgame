const maxLevels = 8; // Максимальное количество уровней

// Класс для пользователя
export class Player {
  name: string;
  id: number;
  age: number;
  level: number;
  constructor(id: number, name: string, age: number, level: number) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.level = level;
  }
}

// Функция для загрузки следующего уровня
function completeLevel(levelNumber: number) {
  if (levelNumber <= maxLevels) {
    return levelNumber + 1;
  } else {
    return maxLevels;
  }
}

// Функция получения данных уровня
export function getLevelData(currentLevel: number): string[] {
  switch (currentLevel) {
    case 1:
    default:
      return ['square'];
    case 2:
      return ['triangle'];
    case 3:
      return ['circle'];
    case 4:
      return ['square', 'circle'];
    case 5:
      return ['square', 'circle', 'triangle'];
    case 6:
      return ['rectangle'];
    case 7:
      return ['square', 'rectangle'];
    case 8:
      return ['square', 'circle', 'triangle', 'rectangle'];
  }
}
