import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsFacade } from './settings/+state/settings.facade';
@Component({
  selector: 'app-root',
  template: `
    <app-nav-menu></app-nav-menu>
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
  constructor(public settingsFacade: SettingsFacade) {}
}
