import { createSelector, createFeatureSelector } from '@ngrx/store';
import { tournamentsSelectors } from './tournaments.reducer';
import { Tournament } from './dashboard.model';
import { DashboardState, DASHBOARD_FEATURE_KEY } from './dashboard.reducer';

const selectDashboardState = createFeatureSelector<DashboardState>(
  DASHBOARD_FEATURE_KEY
);

const selectTournamentsState = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.tournaments
);

const selectAllTournaments = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectAll
);

const selectLastTournament = createSelector(
  selectAllTournaments,
  (tournaments: Tournament[]) =>
    tournaments && tournaments[0] ? tournaments[0] : null
);

export const DashboardSelectors = {
  selectAllTournaments,
  selectLastTournament
};
