import {RootState} from '../index';
import {UserProperties} from './index';

const getState = (state: RootState): UserProperties => state.userProperties;

export const userPropertiesSelectors = {
  getState,
};
