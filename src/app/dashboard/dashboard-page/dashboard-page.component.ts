import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DashboardFacade } from '../+state/dashboard.facade';
import { SettingsFacade } from '../../settings/+state/settings.facade';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <app-dashboard-tournament-info
      [tournamentHandles]="(dashboardFacade.tournamentsHandles$ | async)!"
      [startDate]="(dashboardFacade.currentTournament$ | async)?.startDate"
    ></app-dashboard-tournament-info>
    <app-dashboard-bracket
      [tournament]="(dashboardFacade.currentTournament$ | async)!"
    ></app-dashboard-bracket>
    <app-matches-column
      *ngIf="settingsFacade.isMobile$ | async"
    ></app-matches-column>
  `,
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {
  constructor(
    public dashboardFacade: DashboardFacade,
    public settingsFacade: SettingsFacade
  ) {}
}
