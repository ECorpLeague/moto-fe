import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { head } from 'lodash';
import { DashboardActions } from './dashboard.actions';
import { Tournament, TournamentHandle } from './dashboard.model';

export const TOURNAMENTS_FEATURE_KEY = 'tournaments';

export const adapter: EntityAdapter<Tournament> = createEntityAdapter<
  Tournament
>({
  selectId: (tournament: Tournament) => tournament.id
});

export interface TournamentsState extends EntityState<Tournament> {
  tournamentsHandles: TournamentHandle[];
  currentTournamentId: string | null;
}

export const tournamentsSelectors = {
  ...adapter.getSelectors(),
  selectCurrentTournamentId: (state: TournamentsState) =>
    state.currentTournamentId,
  selectTournamentHandles: (state: TournamentsState) => state.tournamentsHandles
};

export const tournamentsInitialState: TournamentsState = adapter.getInitialState(
  {
    tournamentsHandles: [],
    currentTournamentId: null
  }
);

const reducer = createReducer(
  tournamentsInitialState,
  on(DashboardActions.tournamentsHandlesReceived, (state, { tournaments }) => {
    const firstTournament = head(tournaments);
    return {
      ...state,
      tournamentsHandles: tournaments,
      currentTournamentId: firstTournament?.id || null
    };
  }),
  on(DashboardActions.tournamentReceived, (state, { tournament }) =>
    adapter.upsertOne(tournament, state)
  )
);

export function tournamentReducer(
  state: TournamentsState | undefined,
  action: Action
): TournamentsState {
  return reducer(state, action);
}
