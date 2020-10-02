import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DashboardFacade } from '../+state/dashboard.facade';
import { SettingsFacade } from '../../settings/+state/settings.facade';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div
      class="container"
      [ngClass]="{
        'with-tournaments': !!(dashboardFacade.tournamentsHandles$ | async)
          ?.length,
        'without-tournaments': !(dashboardFacade.tournamentsHandles$ | async)
          ?.length
      }"
    >
      <ng-container
        *ngIf="!!(dashboardFacade.tournamentsHandles$ | async)?.length"
      >
        <app-dashboard-tournament-info
          [tournamentsHandles]="(dashboardFacade.tournamentsHandles$ | async)!"
          [currentTournament]="(dashboardFacade.currentTournament$ | async)!"
          [isActive]="(dashboardFacade.isCurrentTournamentActive$ | async)!"
        ></app-dashboard-tournament-info>
        <app-dashboard-bracket
          [tournament]="(dashboardFacade.currentTournament$ | async)!"
          [isActive]="(dashboardFacade.isCurrentTournamentActive$ | async)!"
        ></app-dashboard-bracket>
      </ng-container>
      <div
        *ngIf="!(dashboardFacade.tournamentsHandles$ | async)?.length"
        class="no-results"
      >
        <app-spinner
          *ngIf="dashboardFacade.areTournamentsHandlesLoading$ | async"
          [size]="15"
        ></app-spinner>
        <div *ngIf="!(dashboardFacade.areTournamentsHandlesLoading$ | async)">
          {{ 'DASHBOARD.ERRORS.LOAD_TOURNAMENTS' | transloco }}
        </div>
      </div>
      <app-matches-column
        *ngIf="settingsFacade.isMobile$ | async"
      ></app-matches-column>
    </div>
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
