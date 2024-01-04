// @ts-ignore
import {changeIcon, getIcon} from 'react-native-change-icon';
import React, {useContext, useMemo} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProps} from 'navigator/routeProps';
import {NavigatorScreens} from 'navigator/routes';
import styles from './styles';
import {AppThemeContext} from 'view/providers/AppTheme';
import {ThemeName, themes} from 'view/themes';
import ThemeRadioButton from 'view/components/ThemeRadioButton';
import ActionButton from 'view/components/ActionButton';
import useManager from 'state/manager';

interface Props {
  navigation: NativeStackNavigationProp<
    RouteProps,
    NavigatorScreens['Appearance']
  >;
}

export default function Appearance({
  navigation,
}: Props): React.FunctionComponentElement<Props> {
  const safeAreaInsets = useSafeAreaInsets();

  const theme = useContext(AppThemeContext);

  const manager = useManager()

  const selectedThemeName = manager.theme;

  return (
    <>
      <View
        style={[
          styles.container,
          {paddingTop: safeAreaInsets.top, backgroundColor: theme.C1},
        ]}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContainer,
            {paddingBottom: safeAreaInsets.bottom},
          ]}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}>
          {Object.keys(themes).map(themeName => {
            return (
              <ThemeRadioButton
                key={`theme-${themeName}`}
                themeName={themeName as ThemeName}
                selected={selectedThemeName === themeName}
                onPress={manager.changeTheme}
              />
            );
          })}
        </ScrollView>
        <ActionButton title={'Готово'} onPress={navigation.goBack} />
      </View>
    </>
  );
}
