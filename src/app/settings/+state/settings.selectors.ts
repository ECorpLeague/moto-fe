import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY, SettingsState } from './settings.reducer';

const selectSettings = createFeatureSelector<SettingsState>(
  SETTINGS_FEATURE_KEY
);

const selectSettingsState = createSelector(
  selectSettings,
  (state: SettingsState) => state
);

const selectIsMobile = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.isMobile
);

const selectActiveLanguage = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.language
);

export const SettingsSelectors = {
  selectIsMobile,
  selectActiveLanguage
};
