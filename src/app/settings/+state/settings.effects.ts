import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, switchMap } from 'rxjs/operators';
import { SettingsActions } from './settings.actions';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private breakpointObserver: BreakpointObserver
  ) {}

  config = {
    mobileEnd: '(max-width: 749.98px)'
  };

  initApp = createEffect(() => () =>
    this.actions$.pipe(
      ofType(SettingsActions.init),
      switchMap(() =>
        this.breakpointObserver
          .observe([this.config.mobileEnd])
          .pipe(
            map(({ matches }) =>
              matches
                ? SettingsActions.mobileScreenDetected()
                : SettingsActions.desktopScreenDetected()
            )
          )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return SettingsActions.init();
  }
}
