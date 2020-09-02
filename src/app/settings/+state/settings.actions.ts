import { createAction } from '@ngrx/store';

const mobileScreenDetected = createAction('[Settings] Mobile screen detected');

const desktopScreenDetected = createAction(
  '[Settings] Desktop screen detected'
);

const init = createAction('[App] App init');

export const SettingsActions = {
  mobileScreenDetected,
  desktopScreenDetected,
  init
};
