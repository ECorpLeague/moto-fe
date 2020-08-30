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
import { DashboardTournamentInfoComponent } from './dashboard-tournament-info/dashboard-tournament-info.component';
import { DashboardResultComponent } from './dashboard-result/dashboard-result.component';
import { DashboardUpcomingMatchComponent } from './dashboard-upcoming-match/dashboard-upcoming-match.component';
import { DashboardTeamComponent } from './dashboard-team/dashboard-team.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardUpcomingMatchesComponent,
    DashboardLiveMatchesComponent,
    DashboardResultsComponent,
    DashboardBracketComponent,
    DashboardBracketBlockComponent,
    DashboardTournamentInfoComponent,
    DashboardResultComponent,
    DashboardUpcomingMatchComponent,
    DashboardTeamComponent
  ],
  imports: [CommonModule, LabelModule, NgTournamentTreeModule],
  exports: [DashboardPageComponent]
})
export class DashboardModule {}
