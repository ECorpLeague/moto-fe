import { createReducer, on, Action } from '@ngrx/store';
import { SettingsActions } from './settings.actions';

export const SETTINGS_FEATURE_KEY = 'preferences';

export interface SettingsState {
  isMobile: boolean;
}

export const settingsInitialState: SettingsState = {
  isMobile: false
};

export const settingsSelectors = {
  isMobile: (state: SettingsState) => state.isMobile
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
  })
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
): SettingsState {
  return reducer(state, action);
}
