/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppThemeProvider} from './providers/AppThemeProvider';
import {RootStack} from './navigator/RootStack';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <AppThemeProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppThemeProvider>
  );
}

export default App;
