import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslocoService } from '@ngneat/transloco';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SettingsActions } from './settings.actions';
import { Language } from './settings.model';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions: Actions,
    private translateService: TranslocoService,
    private breakpointObserver: BreakpointObserver
  ) {}

  config = {
    mobileEnd: '(max-width: 749.98px)',
    languageStorageName: 'language'
  };

  detectScreen = createEffect(() => () =>
    this.actions.pipe(
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

  setLanguageOnStart = createEffect(() => () =>
    this.actions.pipe(
      ofType(SettingsActions.init),
      map(() => localStorage.getItem(this.config.languageStorageName)),
      filter((language: string | null) => !!language),
      map(language => language! as Language),
      map(language => SettingsActions.languageChanged({ language }))
    )
  );

  setLanguageOnChange = createEffect(
    () => () =>
      this.actions.pipe(
        ofType(SettingsActions.languageChanged),
        tap(({ language }) => this.translateService.setActiveLang(language)),
        tap(({ language }) =>
          localStorage.setItem(this.config.languageStorageName, language)
        )
      ),
    { dispatch: false }
  );
}
