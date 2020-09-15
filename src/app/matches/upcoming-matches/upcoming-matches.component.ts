import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upcoming-matches',
  template: `
    <app-title-label
      [title]="'MATCHES.UPCOMING_MATCHES' | transloco"
    ></app-title-label>
    <app-hover-border *ngFor="let i of [1, 2, 3, 4]"
      ><app-upcoming-match></app-upcoming-match>
    </app-hover-border>
  `,
  styleUrls: ['./upcoming-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingMatchesComponent {}
