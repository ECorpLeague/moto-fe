import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BracketMatch } from '../../dashboard/+state/dashboard.model';

@Component({
  selector: 'app-upcoming-matches',
  template: `
    <app-title-label
      [title]="'MATCHES.UPCOMING_MATCHES' | transloco"
    ></app-title-label>
    <app-hover-border *ngFor="let match of matches"
      ><app-upcoming-match [match]="match"></app-upcoming-match>
    </app-hover-border>
  `,
  styleUrls: ['./upcoming-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingMatchesComponent {
  @Input() matches: BracketMatch[];
}
