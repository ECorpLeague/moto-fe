import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardUpcomingMatchesComponent } from './dashboard-upcoming-matches/dashboard-upcoming-matches.component';
import { LabelModule } from '../shared/label/label.module';
import { DashboardLiveMatchesComponent } from './dashboard-live-matches/dashboard-live-matches.component';
import { DashboardResultsComponent } from './dashboard-results/dashboard-results.component';
import { DashboardBracketComponent } from './dashboard-bracket/dashboard-bracket.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardUpcomingMatchesComponent,
    DashboardLiveMatchesComponent,
    DashboardResultsComponent,
    DashboardBracketComponent
  ],
  imports: [CommonModule, LabelModule],
  exports: [DashboardPageComponent]
})
export class DashboardModule {}
