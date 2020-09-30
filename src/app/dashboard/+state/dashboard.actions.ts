import { createAction, props } from '@ngrx/store';
import { Tournament, TournamentHandle } from './dashboard.model';

const tournamentsHandlesReceived = createAction(
  '[App] Tournaments handles received',
  props<{ tournaments: TournamentHandle[] }>()
);

const tournamentsHandlesReceivedError = createAction(
  '[App] Tournaments handles received error'
);

const tournamentReceived = createAction(
  '[App] Tournament Received',
  props<{ tournament: Tournament }>()
);

const tournamentReceivedError = createAction('[App] Tournament Received Error');

const loadTournament = createAction(
  '[Bracket] Load tournament',
  props<{ tournamentId: number }>()
);

export const DashboardActions = {
  tournamentsHandlesReceivedError,
  tournamentsHandlesReceived,
  tournamentReceived,
  tournamentReceivedError,
  loadTournament
};
