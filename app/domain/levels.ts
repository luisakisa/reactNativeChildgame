import {Level} from './entities';

export function getLevelData(currentLevel: number): Level {
  switch (currentLevel) {
    case 1:
    default:
      return {figures: ['square']};
    case 2:
      return {figures: ['triangle']};
    case 3:
      return {figures: ['circle']};
    case 4:
      return {figures: ['square', 'circle']};
    case 5:
      return {figures: ['square', 'circle'], commonColor: true};
    case 6:
      return {figures: ['square', 'circle', 'triangle']};
    case 7:
      return {figures: ['square', 'circle', 'triangle'], commonColor: true};
    case 8:
      return {figures: ['square', 'triangle', 'rectangle']};
  }
}

export const countLevel = 8;
