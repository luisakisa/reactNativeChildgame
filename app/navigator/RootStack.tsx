import React from 'react';
import * as stacks from './stacks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationStack} from './routes';

export const RootStack = (): React.FunctionComponentElement<null> => {
  function getCurrentScreens(): React.FunctionComponentElement<null> {
    return (
      <RootStackNavigator.Screen
        name={NavigationStack.App}
        component={stacks.AppStack}
      />
    );
  }

  const RootStackNavigator = createNativeStackNavigator();
  return (
    <RootStackNavigator.Navigator screenOptions={{headerShown: false}}>
      {getCurrentScreens()}
    </RootStackNavigator.Navigator>
  );
};
