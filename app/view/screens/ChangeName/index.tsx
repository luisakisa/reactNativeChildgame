import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProps} from 'navigator/routeProps';
import {NavigatorScreens} from 'navigator/routes';
import styles from './styles';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {AppThemeContext} from 'view/providers/AppTheme';
import useManager from 'state/manager';

interface Props {
  navigation: NativeStackNavigationProp<
    RouteProps,
    NavigatorScreens['ChangeName']
  >;
}

export default function ChangeName({
  navigation,
}: Props): React.FunctionComponentElement<Props> {
  const safeAreaInsets = useSafeAreaInsets();

  const theme = useContext(AppThemeContext);

  const manager = useManager();

  const translationY = useSharedValue(0);

  const setTranslationY = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });


  function updatePlayerName(newText: string): void {
   manager.changeName(newText)
  }
  return (
    <>
      <View style={[styles.container, {backgroundColor: theme.C1}]}>
        <Animated.ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContainer,
            {paddingTop: safeAreaInsets.top + 32},
          ]}
          onScroll={setTranslationY}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}>
          <Animated.Text style={[styles.title, {color: theme.C3}]}>
            {'Изменить имя'}
          </Animated.Text>
          <Animated.Text
            style={[styles.title, {color: theme.C3, fontSize: 16}]}>
            {'Игрок: ' + manager.playerData.name}
          </Animated.Text>
          <TextInput
            onChangeText={updatePlayerName}
            style={[styles.input, {color: theme.C3, backgroundColor: theme.C2}]}
            multiline={false}
            returnKeyType={'done'}
            placeholder={'Введите новое имя'}
            placeholderTextColor={theme.C3}
          />
        </Animated.ScrollView>
      </View>
    </>
  );
}
