import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingsActions } from './settings/+state/settings.actions';
import { SettingsFacade } from './settings/+state/settings.facade';
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="main">
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <app-matches-column
        *ngIf="!(settingsFacade.isMobile$ | async)"
      ></app-matches-column>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public settingsFacade: SettingsFacade,
    private store: Store<any>
  ) {
    this.store.dispatch(SettingsActions.init());
  }
}
