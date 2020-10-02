import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { flatten } from 'lodash';
import { tournamentsSelectors } from './tournaments.reducer';
import { BracketMatch, Tournament } from './dashboard.model';
import { DashboardState, DASHBOARD_FEATURE_KEY } from './dashboard.reducer';
import { isFinishedMatch, isUpcomingMatch } from './dashboard.utilities';

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

const selectActiveTournament = createSelector(
  selectActiveTournamentId,
  selectTournamentEntities,
  (
    activeTournamentId: number | null,
    tournamentEntities: Dictionary<Tournament>
  ) =>
    tournamentEntities && activeTournamentId
      ? tournamentEntities[activeTournamentId]!
      : null
);

const selectIsCurrentTournamentActive = createSelector(
  selectCurrentTournamentId,
  selectActiveTournamentId,
  (currentId: number | null, activeTournamentId: number | null) =>
    currentId === activeTournamentId
);

const selectResults = createSelector(
  selectActiveTournament,
  (activeTournament: Tournament | null) => {
    return activeTournament
      ? flatten(
          activeTournament.rounds.map(round =>
            round.matches
              .filter((match: BracketMatch) => isFinishedMatch(match))
              .map((match: BracketMatch) => match)
          )
        )
      : [];
  }
);

const selectUpcomingMatches = createSelector(
  selectActiveTournament,
  (activeTournament: Tournament | null) => {
    return activeTournament
      ? flatten(
          activeTournament.rounds.map(round =>
            round.matches
              .filter((match: BracketMatch) => isUpcomingMatch(match))
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
  selectIsCurrentTournamentActive,
  selectResults,
  selectUpcomingMatches
};
