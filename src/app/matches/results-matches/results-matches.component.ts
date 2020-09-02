import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-results-matches',
  template: `
    <app-title-label [title]="'Results'"></app-title-label>
    <app-result-match *ngFor="let i of [1, 2, 3, 4]"></app-result-match>
  `,
  styleUrls: ['./results-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsMatchesComponent {}
