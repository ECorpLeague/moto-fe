import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-live-matches',
  template: `
    <app-title-label [title]="'MATCHES.LIVE' | transloco"></app-title-label>
    <app-hover-border *ngFor="let i of [1]"
      ><app-upcoming-match></app-upcoming-match
    ></app-hover-border>
  `,
  styleUrls: ['./live-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveMatchesComponent {}
