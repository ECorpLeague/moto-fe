import { createAction, props } from '@ngrx/store';
import { Tournament } from './dashboard.model';

const tournamentsReceived = createAction(
  '[App] Tournaments Received',
  props<{ tournaments: Tournament[] }>()
);

export const DashboardActions = {
  tournamentsReceived
};
