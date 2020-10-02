import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BracketMatch } from 'src/app/dashboard/+state/dashboard.model';

@Component({
  selector: 'app-results-matches',
  template: `
    <app-title-label [title]="'MATCHES.RESULTS' | transloco"></app-title-label>
    <app-hover-border *ngFor="let match of matches"
      ><app-result-match [match]="match"></app-result-match
    ></app-hover-border>
    <app-spinner *ngIf="!matches.length" [size]="5"></app-spinner>
  `,
  styleUrls: ['./results-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsMatchesComponent {
  @Input() matches: BracketMatch[];
}
