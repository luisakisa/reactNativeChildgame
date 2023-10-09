import React, {useContext, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Alert, Dimensions} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RouteProp} from '@react-navigation/native';
import {AppThemeContext} from '../../providers/AppTheme';
import {RouteProps} from '../../navigator/routeProps';
import {NavigatorScreens} from '../../navigator/routes';
import Draggable from 'react-native-draggable';
import CircleOutline from '../../components/CircleOutline';
import SquareOutline from '../../components/SquareOutline';
import TriangleOutline from '../../components/TriangleOutline';
import Circle from '../../components/Circle';
import Square from '../../components/Square';
import Triangle from '../../components/Triangle';

interface Props {
  navigation: NativeStackNavigationProp<RouteProps, NavigatorScreens['Game']>;
  route: RouteProp<RouteProps, NavigatorScreens['Game']>;
}

export default function Game({
  navigation,
}: Props): React.FunctionComponentElement<Props> {
  const safeAreaInsets = useSafeAreaInsets();

  // const {categories, title} = route.params;

  // const categoryConfig = useMemo(() => {
  //   return categoriesConfig.find(c => c.id === categories[0]);
  // }, [categories]);

  const theme = useContext(AppThemeContext);

  function endGame(): void {
    Alert.alert('endGame', 'endGameDescription', [
      {text: 'no', style: 'cancel'},
      {text: 'yes', onPress: navigation.goBack},
    ]);
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [circleCorrect, setCircleCorrect] = useState(false);
  const [triangleCorrect, setTriangleCorrect] = useState(false);
  const [squareCorrect, setSquareCorrect] = useState(false);

  // Начальные позиции фигур
  const initialPositions = {
    circle: {x: 50, y: 50},
    triangle: {x: 150, y: 50},
    square: {x: 250, y: 50},
  };

  // Проверка, были ли все фигуры правильно помещены в контуры
  useEffect(() => {
    if (circleCorrect && triangleCorrect && squareCorrect) {
      Alert.alert('Поздравляем!', 'Вы победили!');
    }
  }, [circleCorrect, squareCorrect, triangleCorrect]);

  // console.log(windowWidth / 2.7)

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.C1,
          paddingBottom: safeAreaInsets.bottom + 16,
          paddingTop: safeAreaInsets.top,
        },
      ]}>
      {/* Отображение контуров */}
      <CircleOutline style={{left: windowWidth / 2.7, top: 180}} />
      <TriangleOutline style={{left: windowWidth / 2.7, top: 310}} />
      <SquareOutline style={{left: windowWidth / 2.7, top: 450}} />

      {/* Перетаскиваемые фигуры */}
      <Draggable
        x={initialPositions.circle.x}
        y={initialPositions.circle.y}
        renderShape="circle"
        onDragRelease={({nativeEvent}) => {
          // Проверка, была ли фигура помещена в правильный контур
          if (
            nativeEvent.pageX >= 140 && // Замените эти значения на координаты контура
            nativeEvent.pageX <= 245 && // ваших контуров
            nativeEvent.pageY >= 50 &&
            nativeEvent.pageY <= 150
          ) {
            setCircleCorrect(true);
          }
        }}>
        <Circle />
      </Draggable>

      <Draggable
        x={initialPositions.circle.x}
        y={initialPositions.circle.y}
        renderShape="circle"
        onDragRelease={({nativeEvent}) => {
          // Проверка, была ли фигура помещена в правильный контур
          if (
            nativeEvent.pageX >= 140 && // Замените эти значения на координаты контура
            nativeEvent.pageX <= 245 && // ваших контуров
            nativeEvent.pageY >= 50 &&
            nativeEvent.pageY <= 150
          ) {
            setCircleCorrect(true);
          }
          console.log(nativeEvent.pageY);
          // console.log(nativeEvent.pageY);
        }}>
        <Text>'a'</Text>
      </Draggable>

      <Draggable
        x={initialPositions.triangle.x}
        y={initialPositions.triangle.y}
        renderShape="triangle"
        onDragRelease={({nativeEvent}) => {
          // Проверка, была ли фигура помещена в правильный контур
          if (
            nativeEvent.pageX >= 140 && // Замените эти значения на координаты контура
            nativeEvent.pageX <= 245 && // ваших контуров
            nativeEvent.pageY >= 314 &&
            nativeEvent.pageY <= 417
          ) {
            setTriangleCorrect(true);
            console.log('t');
          }
        }}>
        <Triangle />
      </Draggable>

      <Draggable
        x={initialPositions.square.x}
        y={initialPositions.square.y}
        renderShape="square"
        onDragRelease={({nativeEvent}) => {
          // Проверка, была ли фигура помещена в правильный контур
          if (
            nativeEvent.pageX >= 250 && // Замените эти значения на координаты контура
            nativeEvent.pageX <= 240 && // ваших контуров
            nativeEvent.pageY >= 50 &&
            nativeEvent.pageY <= 150
          ) {
            setSquareCorrect(true);
            console.log('s');
          }
        }}>
        <Square />
      </Draggable>
    </View>
  );
}
