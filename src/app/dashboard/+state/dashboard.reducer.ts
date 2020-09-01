import { ActionReducerMap } from '@ngrx/store';
import {
  TournamentsState,
  tournamentReducer,
  TOURNAMENTS_FEATURE_KEY
} from './tournaments.reducer';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface DashboardState {
  [TOURNAMENTS_FEATURE_KEY]: TournamentsState;
}

export const dashboardReducers: ActionReducerMap<DashboardState> = {
  [TOURNAMENTS_FEATURE_KEY]: tournamentReducer
};
