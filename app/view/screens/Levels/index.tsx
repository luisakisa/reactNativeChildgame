import React, {
  useContext,
} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProps} from 'navigator/routeProps';
import {NavigatorScreens} from 'navigator/routes';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LevelCard from 'components/LevelCard';
import MainHeader from 'components/MainHeader';
import {AppThemeContext} from 'view/providers/AppTheme';
import useManager from 'state/manager';
import { countLevel } from 'domain/levels';

const blankArrayOfLevels = Array(countLevel).fill(0);

interface Props {
  navigation: NativeStackNavigationProp<RouteProps, NavigatorScreens['Levels']>;
}

export default function Levels({
  navigation,
}: Props): React.FunctionComponentElement<Props> {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useContext(AppThemeContext);
  const handleLevelPress = (level: number) => {
    navigation.navigate(NavigatorScreens.Game, {level});
  };

  const manager = useManager();

  function renderItem({
    index,
  }: {
    item: number;
    index: number;
  }): React.ReactElement {
    return (
      <View style={styles.levelItem}>
        <LevelCard level={index + 1} onPress={handleLevelPress} />
      </View>
    );
  }

  return (
    <FlatList
      style={[styles.container, {backgroundColor: theme.C1}]}
      contentContainerStyle={{
        paddingTop: safeAreaInsets.top + 16,
        paddingBottom: safeAreaInsets.bottom + 16,
      }}
      data={blankArrayOfLevels}
      ListHeaderComponent={
        <MainHeader
          title={'Уровни'}
          onSettingsPress={() => navigation.navigate(NavigatorScreens.Settings)}
          name={manager.playerData.name}
        />
      }
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
