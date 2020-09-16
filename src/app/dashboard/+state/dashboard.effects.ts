import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { SettingsActions } from '../../settings/+state/settings.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';
import { DashboardActions } from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions: Actions,
    private dashboardService: DashboardService
  ) {}

  // loadTournamentHandles = createEffect(() => () =>
  //   this.actions.pipe(
  //     ofType(SettingsActions.init),
  //     switchMap(() => this.dashboardService.getTournamentHandles()),
  //     map(tournamentHandles =>
  //       DashboardActions.tournamentsHandlesReceived({
  //         tournaments: tournamentHandles
  //       })
  //     )
  //   )
  // );
}
