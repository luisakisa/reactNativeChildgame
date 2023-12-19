import reducer from './persistReducer';
import thunkMiddleware from 'redux-thunk';
import {persistStore} from 'redux-persist';
import ReduxActions from './actions';
import ReduxSelectors from './selectors';
import {applyMiddleware, createStore} from 'redux';
import {userProperties} from './userProperties';
import persistReducer from './persistReducer';

const middlewares = [thunkMiddleware];

const store = createStore(persistReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof reducer>;

export const persistor = persistStore(store);

export default store;

export const Redux = {
  Actions: ReduxActions,
  Selectors: ReduxSelectors,
};
