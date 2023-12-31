enum ProjectNavigatorScreens {
  Settings = 'settings',
  Game = 'game',
  Players = 'players',
  EndGame = 'end',
  Levels = 'levels',
  Appearance = 'appearance',
  ChangeName = 'change name'
}

export const NavigatorScreens = {...ProjectNavigatorScreens};
export type NavigatorScreens = typeof NavigatorScreens;

export enum NavigationStack {
  App = 'APP_STACK',
}
