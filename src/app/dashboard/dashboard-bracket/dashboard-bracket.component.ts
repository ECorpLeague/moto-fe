import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-bracket',
  template: `
    <app-title-label [title]="'Bracket'"></app-title-label>
  `,
  styleUrls: ['./dashboard-bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBracketComponent {}
