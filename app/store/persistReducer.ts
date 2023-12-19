import {persistReducer} from 'redux-persist';
import {userProperties} from './userProperties';
import {name as appName} from '../../app.json';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: appName,
  storage: AsyncStorage,
};

const generalReducer = combineReducers({
  userProperties: userProperties.reducer,
});

export default persistReducer(persistConfig, generalReducer);
