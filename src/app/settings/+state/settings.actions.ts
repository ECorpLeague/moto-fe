import { createAction, props } from '@ngrx/store';
import { Language } from './settings.model';

const mobileScreenDetected = createAction('[Settings] Mobile screen detected');

const desktopScreenDetected = createAction(
  '[Settings] Desktop screen detected'
);

const init = createAction('[App] App init');

const languageChanged = createAction(
  '[App] Language changed',
  props<{ language: Language }>()
);

export const SettingsActions = {
  mobileScreenDetected,
  desktopScreenDetected,
  init,
  languageChanged
};
