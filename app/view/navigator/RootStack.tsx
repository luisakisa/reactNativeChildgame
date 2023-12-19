import React from 'react';
import * as stacks from './stacks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationStack} from './routes';

export const RootStack = (): React.FunctionComponentElement<null> => {
  const RootStackNavigator = createNativeStackNavigator();
  return (
    <RootStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <RootStackNavigator.Screen
        name={NavigationStack.App}
        component={stacks.AppStack}
      />
    </RootStackNavigator.Navigator>
  );
};
