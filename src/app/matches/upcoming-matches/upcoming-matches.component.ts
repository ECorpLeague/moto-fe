import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upcoming-matches',
  template: `
    <app-title-label [title]="'Upcoming matches'"></app-title-label>
    <app-upcoming-match *ngFor="let i of [1, 2, 3, 4]"></app-upcoming-match>
  `,
  styleUrls: ['./upcoming-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingMatchesComponent {}
