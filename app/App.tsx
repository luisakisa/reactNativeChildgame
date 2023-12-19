/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppThemeProvider} from './view/providers/AppThemeProvider';
import {RootStack} from 'view/navigator/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import store, {persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
