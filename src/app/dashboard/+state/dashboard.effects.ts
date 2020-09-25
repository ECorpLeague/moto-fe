import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { SettingsActions } from '../../settings/+state/settings.actions';
import { catchError, map, switchMap, switchMapTo } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';
import { DashboardActions } from './dashboard.actions';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions: Actions,
    private dashboardService: DashboardService
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
      catchError(() => of(DashboardActions.tournamentsHandlesReceivedError()))
    )
  );

  loadFirstTournament = createEffect(() => () =>
    this.actions.pipe(
      ofType(DashboardActions.tournamentsHandlesReceived),
      switchMap(({ tournaments }) =>
        this.dashboardService.getTournamentById(tournaments[0].id)
      ),
      map(tournament => DashboardActions.tournamentReceived({ tournament })),
      catchError(() => of(DashboardActions.tournamentReceivedError()))
    )
  );
}
