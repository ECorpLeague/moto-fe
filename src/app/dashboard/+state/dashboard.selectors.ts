import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { tournamentsSelectors } from './tournaments.reducer';
import { BracketMatch, Tournament } from './dashboard.model';
import { DashboardState, DASHBOARD_FEATURE_KEY } from './dashboard.reducer';
import { isFinishedMatch } from './utilities';
import { flatten } from 'lodash';

const selectDashboardState = createFeatureSelector<DashboardState>(
  DASHBOARD_FEATURE_KEY
);

const selectTournamentsState = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.tournaments
);

const selectTournamentHandles = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectTournamentHandles
);

const selectAreTournamentsHandlesLoading = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectAreTournamentsHandlesLoading
);

const selectTournamentEntities = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectEntities
);

const selectCurrentTournamentId = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectCurrentTournamentId
);

const selectActiveTournamentId = createSelector(
  selectTournamentsState,
  tournamentsSelectors.selectActiveTournamentId
);

const selectCurrentTournament = createSelector(
  selectTournamentEntities,
  selectCurrentTournamentId,
  (entities: Dictionary<Tournament>, currentId: number | null) =>
    currentId && entities[currentId] ? entities[currentId]! : null
);

const selectResults = createSelector(
  selectActiveTournamentId,
  selectTournamentEntities,
  (currentTournamentId, tournamentEntities) => {
    const entity =
      tournamentEntities && currentTournamentId
        ? tournamentEntities[currentTournamentId]
        : null;
    return entity
      ? flatten(
          entity.rounds.map(round =>
            round.matches
              .filter((match: BracketMatch) => isFinishedMatch(match))
              .map((match: BracketMatch) => match)
          )
        )
      : [];
  }
);

export const DashboardSelectors = {
  selectTournamentHandles,
  selectCurrentTournamentId,
  selectActiveTournamentId,
  selectCurrentTournament,
  selectAreTournamentsHandlesLoading,
  selectResults
};
