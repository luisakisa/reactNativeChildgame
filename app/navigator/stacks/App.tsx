import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreens} from './../routes';
import {RouteProps} from '../routeProps';
import Game from '../../screens/Game';

const Stack = createNativeStackNavigator<RouteProps>();

export function AppStack(): React.FunctionComponentElement<null> {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorScreens.Game}>
      {/* <Stack.Screen name={NavigatorScreens.Settings} component={Settings} /> */}
      <Stack.Screen
        name={NavigatorScreens.Game}
        component={Game}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}
