import React, {useContext, useMemo} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProps} from 'view/navigator/routeProps';
import {NavigatorScreens} from 'view/navigator/routes';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {RouteProp} from '@react-navigation/native';
import {AppThemeContext} from 'view/providers/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ActionButton from 'components/ActionButton';

const sessionCompletedImage = require('assets/images/sessionOutroSessionCompleted/index.png');
const dayCompletedImage = require('assets/images/sessionOutroDayCompleted/index.png');


interface Props {
  navigation: NativeStackNavigationProp<
    RouteProps,
    NavigatorScreens['EndGame']
  >;
  route: RouteProp<RouteProps, NavigatorScreens['EndGame']>;
}

export default function EndGame({
  navigation,
  route,
}: Props): React.FunctionComponentElement<Props> {
  const theme = useContext(AppThemeContext);

  const {sessionIndex} = route.params;

  const safeAreaInsets = useSafeAreaInsets();

  const isDayCompleted = useMemo(() => sessionIndex > 0, [sessionIndex]);


  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.C1,
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom + 16,
        },
      ]}>
      <Image
        source={isDayCompleted ? dayCompletedImage : sessionCompletedImage}
        style={styles.image}
        resizeMode={'cover'}
      />
      <Text style={[styles.title, {color: theme.C3}]}>{'Уровень пройден'}</Text>
      <Text
        style={[
          styles.description,
          {color: isDayCompleted ? theme.C4 : theme.C3},
        ]}>
        {'Так держать!' + '\n' + 'Следующий уровень уже доступен'}
      </Text>
      <ActionButton
        title={'Далее'}
        onPress={() => {
          navigation.navigate(NavigatorScreens.Levels);
        }}
      />
    </View>
  );
}
