import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTournamentTreeModule } from 'ng-tournament-tree';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardUpcomingMatchesComponent } from './dashboard-upcoming-matches/dashboard-upcoming-matches.component';
import { LabelModule } from '../shared/label/label.module';
import { DashboardLiveMatchesComponent } from './dashboard-live-matches/dashboard-live-matches.component';
import { DashboardResultsComponent } from './dashboard-results/dashboard-results.component';
import { DashboardBracketComponent } from './dashboard-bracket/dashboard-bracket.component';
import { DashboardBracketBlockComponent } from './dashboard-bracket-block/dashboard-bracket-block.component';
import { DashboardBracketBlockTeamComponent } from './dashboard-bracket-block-team/dashboard-bracket-block-team.component';
import { DashboardTournamentInfoComponent } from './dashboard-tournament-info/dashboard-tournament-info.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardUpcomingMatchesComponent,
    DashboardLiveMatchesComponent,
    DashboardResultsComponent,
    DashboardBracketComponent,
    DashboardBracketBlockComponent,
    DashboardBracketBlockTeamComponent,
    DashboardTournamentInfoComponent
  ],
  imports: [CommonModule, LabelModule, NgTournamentTreeModule],
  exports: [DashboardPageComponent]
})
export class DashboardModule {}
