import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardMatchesComponent } from './dashboard-matches/dashboard-matches.component';
import { LabelModule } from '../shared/label/label.module';

@NgModule({
  declarations: [DashboardPageComponent, DashboardMatchesComponent],
  imports: [CommonModule, LabelModule],
  exports: [DashboardPageComponent]
})
export class DashboardModule {}
