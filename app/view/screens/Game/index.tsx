import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Alert, Dimensions} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RouteProp} from '@react-navigation/native';
import {AppThemeContext} from 'view/providers/AppTheme';
import {RouteProps} from 'view/navigator/routeProps';
import {NavigatorScreens} from 'view/navigator/routes';
import Draggable from 'react-native-draggable';
import CircleOutline from 'view/components/CircleOutline';
import SquareOutline from 'view/components/SquareOutline';
import TriangleOutline from 'view/components/TriangleOutline';
import Circle from 'view/components/Circle';
import Square from 'view/components/Square';
import Triangle from 'view/components/Triangle';
import LottieView from 'lottie-react-native';
import {completeLevel, getData} from '../../../model/levels';
import MainHeader from 'view/components/MainHeader';

interface Props {
  navigation: NativeStackNavigationProp<RouteProps, NavigatorScreens['Game']>;
  route: RouteProp<RouteProps, NavigatorScreens['Game']>;
}

export default function Game({
  navigation,
  route,
}: Props): React.FunctionComponentElement<Props> {
  const safeAreaInsets = useSafeAreaInsets();

  const level = getData(route.params.level);

  const figures = level.figures;

  const theme = useContext(AppThemeContext);

  const confettiAnimation = useRef<LottieView>(null);

  const windowWidth = Dimensions.get('window').width;

  const [circleCorrect, setCircleCorrect] = useState<boolean>(
    figures.includes('circle') ? false : true,
  );
  const [triangleCorrect, setTriangleCorrect] = useState<boolean>(
    figures.includes('triangle') ? false : true,
  );
  const [squareCorrect, setSquareCorrect] = useState<boolean>(
    figures.includes('square') ? false : true,
  );

  // Начальные позиции фигур
  const initialPositions = {
    circle: {x: 50, y: 80},
    triangle: {x: 150, y: 80},
    square: {x: 250, y: 80},
  };

  // Проверка, были ли все фигуры правильно помещены в контуры
  useEffect(() => {
    if (circleCorrect && triangleCorrect && squareCorrect) {
      completeLevel()
      setTimeout(() => {
        navigation.navigate(NavigatorScreens.EndGame, {sessionIndex: 5});
      }, 200);
    }
  }, [circleCorrect, navigation, squareCorrect, triangleCorrect]);

  function getCircle(): React.ReactElement {
    return (
      <>
        <CircleOutline style={{left: windowWidth / 2.7, top: 180}} />
        <Draggable
          x={initialPositions.circle.x}
          y={initialPositions.circle.y}
          renderShape="circle"
          onDragRelease={({nativeEvent}) => {
            // Проверка, была ли фигура помещена в правильный контур
            if (
              nativeEvent.pageX >= 140 && // Замените эти значения на координаты контура
              nativeEvent.pageX <= 245 && // ваших контуров
              nativeEvent.pageY >= 175 &&
              nativeEvent.pageY <= 290
            ) {
              setCircleCorrect(true);
            }
          }}>
          <Circle />
        </Draggable>
      </>
    );
  }

  function getTriangle(): React.ReactElement {
    return (
      <>
        <TriangleOutline style={{left: windowWidth / 2.7, top: 310}} />
        <Draggable
          x={initialPositions.triangle.x}
          y={initialPositions.triangle.y}
          renderShape="triangle"
          onDragRelease={({nativeEvent}) => {
            // Проверка, была ли фигура помещена в правильный контур
            if (
              nativeEvent.pageX >= 130 &&
              nativeEvent.pageX <= 255 &&
              nativeEvent.pageY >= 310 &&
              nativeEvent.pageY <= 420
            ) {
              setTriangleCorrect(true);
            }
          }}>
          <Triangle />
        </Draggable>
      </>
    );
  }

  function getSquare(): React.ReactElement {
    return (
      <>
        <SquareOutline style={{left: windowWidth / 2.7, top: 450}} />
        <Draggable
          x={initialPositions.square.x}
          y={initialPositions.square.y}
          renderShape="square"
          onDragRelease={({nativeEvent}) => {
            // Проверка, была ли фигура помещена в правильный контур
            if (
              nativeEvent.pageX >= 135 &&
              nativeEvent.pageX <= 255 &&
              nativeEvent.pageY >= 450 &&
              nativeEvent.pageY <= 560
            ) {
              setSquareCorrect(true);
            }
          }}>
          <Square />
        </Draggable>
      </>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.C1,
          paddingBottom: safeAreaInsets.bottom + 16,
          paddingTop: safeAreaInsets.top + 16,
        },
      ]}>
      <MainHeader
        title={'Уровень ' + route.params.level}
        onSettingsPress={() => navigation.navigate(NavigatorScreens.Settings)}
        onInfoPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      {figures.includes('circle') && getCircle()}
      {figures.includes('triangle') && getTriangle()}
      {figures.includes('square') && getSquare()}

      <View pointerEvents={'none'} style={styles.confettiContainer}>
        <LottieView
          ref={confettiAnimation}
          autoPlay={false}
          loop={false}
          source={require('assets/lottie/goldConfetti.json')}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
}
