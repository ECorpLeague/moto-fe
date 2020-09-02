import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgTournamentTreeModule } from 'ng-tournament-tree';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LabelModule } from '../shared/label/label.module';
import { DashboardBracketComponent } from './dashboard-bracket/dashboard-bracket.component';
import { DashboardBracketBlockComponent } from './dashboard-bracket-block/dashboard-bracket-block.component';
import { DashboardTournamentInfoComponent } from './dashboard-tournament-info/dashboard-tournament-info.component';
import {
  DASHBOARD_FEATURE_KEY,
  dashboardReducers
} from './+state/dashboard.reducer';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TeamBlockModule } from '../shared/team-block/team-block.module';
import { MatchesModule } from '../matches/matches.module';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardBracketComponent,
    DashboardBracketBlockComponent,
    DashboardTournamentInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature(DASHBOARD_FEATURE_KEY, dashboardReducers),
    LabelModule,
    TeamBlockModule,
    MatchesModule,
    NgTournamentTreeModule
  ],
  exports: [DashboardPageComponent]
})
export class DashboardModule {}
