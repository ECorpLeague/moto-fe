import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DashboardActions } from './dashboard.actions';
import { Tournament } from './dashboard.model';

export const TOURNAMENTS_FEATURE_KEY = 'tournaments';

export const adapter: EntityAdapter<Tournament> = createEntityAdapter<
  Tournament
>({
  selectId: (tournament: Tournament) => tournament.id
});

export interface TournamentsState extends EntityState<Tournament> {}

export const tournamentsSelectors = {
  ...adapter.getSelectors()
};

export const tournamentsInitialState: TournamentsState = adapter.getInitialState();

const reducer = createReducer(
  tournamentsInitialState,
  on(DashboardActions.tournamentsReceived, (state, { tournaments }) =>
    adapter.upsertMany(tournaments, state)
  )
);

export function tournamentReducer(
  state: TournamentsState | undefined,
  action: Action
): TournamentsState {
  return reducer(state, action);
}
