enum ProjectNavigatorScreens {
  Decks = 'decks',
  Settings = 'settings',
  Manual = 'manual',
  Game = 'game',
  Players = 'players',
  Onboarding = 'onboarding',
  Paywall = 'paywall',
  OnboardingPaywall = 'paywall.onboarding',
  PlanList = 'plan.list',
  Advertising = 'advertising',
  Generation = 'generation',
  PlayerFacts = 'player.facts',
  Disclaimer = 'disclaimer',
}

export const NavigatorScreens = {...ProjectNavigatorScreens};
export type NavigatorScreens = typeof NavigatorScreens;

export enum NavigationStack {
  App = 'APP_STACK',
}
