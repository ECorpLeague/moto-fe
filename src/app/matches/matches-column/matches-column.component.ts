import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-matches-column',
  template: `
    <app-live-matches></app-live-matches>
    <app-upcoming-matches class="upcoming-matches"></app-upcoming-matches>
    <app-results-matches></app-results-matches>
  `,
  styleUrls: ['./matches-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesColumnComponent {}
