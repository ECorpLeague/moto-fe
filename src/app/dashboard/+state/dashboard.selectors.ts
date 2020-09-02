import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
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

const selectTournamentEntities = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectEntities
);

const selectCurrentTournamentId = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectCurrentTournamentId
);

const selectCurrentTournament = createSelector(
  selectTournamentEntities,
  selectCurrentTournamentId,
  (entities: Dictionary<Tournament>, currentId: string | null) =>
    currentId && entities[currentId] ? entities[currentId]! : null
);

export const DashboardSelectors = {
  selectAllTournaments,
  selectCurrentTournamentId,
  selectCurrentTournament
};
