import { createReducer, on, Action } from '@ngrx/store';
import { SettingsActions } from './settings.actions';
import { Language } from './settings.model';

export const SETTINGS_FEATURE_KEY = 'preferences';

export interface SettingsState {
  isMobile: boolean;
  language: Language;
}

export const settingsInitialState: SettingsState = {
  isMobile: false,
  language: Language.PL
};

export const settingsSelectors = {
  isMobile: (state: SettingsState) => state.isMobile,
  language: (state: SettingsState) => state.language
};

const reducer = createReducer(
  settingsInitialState,
  on(SettingsActions.mobileScreenDetected, (state: SettingsState) => {
    return {
      ...state,
      isMobile: true
    };
  }),
  on(SettingsActions.desktopScreenDetected, (state: SettingsState) => {
    return {
      ...state,
      isMobile: false
    };
  }),
  on(SettingsActions.languageChanged, (state: SettingsState, { language }) => {
    return {
      ...state,
      language
    };
  })
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
): SettingsState {
  return reducer(state, action);
}
