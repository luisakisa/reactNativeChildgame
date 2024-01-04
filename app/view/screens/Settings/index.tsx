import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProps} from 'navigator/routeProps';
import {NavigatorScreens} from 'navigator/routes';
import styles from './styles';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import useAnimations from './animations';
import {AppThemeContext} from 'view/providers/AppTheme';
import RowButton from 'view/components/RowButton';
import RowButtonsGroup from 'view/components/RowButtonsGroup';
import { async_getPlayers, delPlayer } from 'model/player';

interface Props {
  navigation: NativeStackNavigationProp<
    RouteProps,
    NavigatorScreens['Settings']
  >;
}

export default function Settings({
  navigation,
}: Props): React.FunctionComponentElement<Props> {
  const safeAreaInsets = useSafeAreaInsets();

  const theme = useContext(AppThemeContext);

  const translationY = useSharedValue(0);

  const setTranslationY = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const animations = useAnimations({translationY});

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
          <Animated.Text
            style={[styles.title, {color: theme.C3}, animations.title]}>
            {'Настройки'}
          </Animated.Text>
          <RowButtonsGroup style={styles.firstGroup}>
            <RowButton
              title={'Оформление'}
              onPress={() => {
                navigation.navigate(NavigatorScreens.Appearance);
              }}
            />
          </RowButtonsGroup>
          <RowButtonsGroup style={styles.firstGroup}>
            <RowButton
              title={'Изменить имя'}
              onPress={() => {
                navigation.navigate(NavigatorScreens.ChangeName);
              }}
            />
          </RowButtonsGroup>
          <RowButtonsGroup>
              <RowButton
                title={"Удалить аккаунт"}
                onPress={()=>{delPlayer}}
                children={<View />}
                color={theme.C5}
              />
            </RowButtonsGroup>
        </Animated.ScrollView>
      </View>
    </>
  );
}
