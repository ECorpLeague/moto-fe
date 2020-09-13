import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-column',
  template: `
    <app-title-label [title]="'News'"> </app-title-label>
    <div class="container">
      <app-news-card *ngFor="let a of [1, 2, 3]"></app-news-card>
    </div>
  `,
  styleUrls: ['./news-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsColumnComponent {}
