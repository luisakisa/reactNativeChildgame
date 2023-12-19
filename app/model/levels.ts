import {Level} from 'domain/entities';
import {countLevel, getLevelData} from 'domain/levels';
import store, {Redux} from 'store';

export const completeLevel = () =>
  store.dispatch(Redux.Actions.UserProperties.completeLevel());

export function getData(level: number): Level {
  return getLevelData(level);
}

export const getNumberLevel = () => {
  const level = store.getState().userProperties.level;
  return level;
};
export const currentLevel = getLevelData(getNumberLevel());

export const allLevels = getLevelData(getNumberLevel());

export const countLevels = countLevel;

