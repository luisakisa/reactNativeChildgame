import {NavigatorScreens} from './routes';
// import {QuestionCategory} from 'configs/categories';

export interface RouteProps {
  [key: string]: any;
  [NavigatorScreens.Game]: {level: number};
  [NavigatorScreens.EndGame]: {sessionIndex: number};
  [NavigatorScreens.Levels]: undefined;
  [NavigatorScreens.Appearance]: undefined;
  [NavigatorScreens.Settings]: undefined;
  [NavigatorScreens.ChangeName]: undefined;
}
