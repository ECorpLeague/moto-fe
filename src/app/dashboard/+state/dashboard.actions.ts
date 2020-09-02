import { createAction, props } from '@ngrx/store';
import { Tournament, TournamentHandle } from './dashboard.model';

const tournamentsHandlesReceived = createAction(
  '[App] Tournaments handles received',
  props<{ tournaments: TournamentHandle[] }>()
);

const tournamentReceived = createAction(
  '[App] Tournament Received',
  props<{ tournament: Tournament }>()
);

export const DashboardActions = {
  tournamentsHandlesReceived,
  tournamentReceived
};
