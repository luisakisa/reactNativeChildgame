import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreens} from '../routes';
import {RouteProps} from '../routeProps';
import Game from 'view/screens/Game';
import EndGame from 'view/screens/EndGame';
import Levels from 'view/screens/Levels';
import Appearance from 'view/screens/Appearance';
import Settings from 'view/screens/Settings';
import ChangeName from 'view/screens/ChangeName';

const Stack = createNativeStackNavigator<RouteProps>();

export function AppStack(): React.FunctionComponentElement<null> {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorScreens.Levels}>
      <Stack.Screen name={NavigatorScreens.Settings} component={Settings} />
      <Stack.Screen name={NavigatorScreens.Game} component={Game} />
      <Stack.Screen name={NavigatorScreens.EndGame} component={EndGame} />
      <Stack.Screen name={NavigatorScreens.Levels} component={Levels} />
      <Stack.Screen name={NavigatorScreens.Appearance} component={Appearance} />
      <Stack.Screen name={NavigatorScreens.ChangeName} component={ChangeName} />

    </Stack.Navigator>
  );
}
