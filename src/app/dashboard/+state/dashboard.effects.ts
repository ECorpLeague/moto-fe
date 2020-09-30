import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, switchMapTo } from 'rxjs/operators';
import { SettingsActions } from '../../settings/+state/settings.actions';
import { DashboardService } from './dashboard.service';
import { DashboardActions } from './dashboard.actions';
import { LogService } from '../../settings/+state/logger.service';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions: Actions,
    private dashboardService: DashboardService,
    private logService: LogService
  ) {}

  loadTournamentHandles = createEffect(() => () =>
    this.actions.pipe(
      ofType(SettingsActions.init),
      switchMapTo(this.dashboardService.getTournamentHandles()),
      map(tournamentHandles =>
        DashboardActions.tournamentsHandlesReceived({
          tournaments: tournamentHandles
        })
      ),
      catchError(error => {
        this.logService.warn(error);
        return of(DashboardActions.tournamentsHandlesReceivedError());
      })
    )
  );

  loadFirstTournament = createEffect(() => () =>
    this.actions.pipe(
      ofType(DashboardActions.tournamentsHandlesReceived),
      switchMap(({ tournaments }) =>
        this.dashboardService.getTournamentById(tournaments[0].id)
      ),
      map(tournament => DashboardActions.tournamentReceived({ tournament })),
      catchError(error => {
        this.logService.warn(error);
        return of(DashboardActions.tournamentReceivedError());
      })
    )
  );

  loadTournament = createEffect(() => () =>
    this.actions.pipe(
      ofType(DashboardActions.loadTournament),
      switchMap(({ tournamentId }) =>
        this.dashboardService.getTournamentById(tournamentId)
      ),
      map(tournament => DashboardActions.tournamentReceived({ tournament })),
      catchError(error => {
        this.logService.warn(error);
        return of(DashboardActions.tournamentReceivedError());
      })
    )
  );
}
