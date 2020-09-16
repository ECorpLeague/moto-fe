import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgTournamentTreeModule } from 'ng-tournament-tree';
import { DashboardEffects } from './+state/dashboard.effects';
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
import { TranslateModule } from '../settings/translate.module';
import { SelectModule } from '../shared/select/select.module';

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
    EffectsModule.forFeature([DashboardEffects]),
    LabelModule,
    MatIconModule,
    MatButtonModule,
    TeamBlockModule,
    MatchesModule,
    NgTournamentTreeModule,
    TranslateModule,
    SelectModule
  ],
  exports: [DashboardPageComponent]
})
export class DashboardModule {}
