import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title-label',
  template: `
    <h1>
      Upcoming matches
    </h1>
  `,
  styleUrls: ['./title-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleLabelComponent {}
