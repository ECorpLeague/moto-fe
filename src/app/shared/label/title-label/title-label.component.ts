import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title-label',
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styleUrls: ['./title-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleLabelComponent {
  @Input() title: string;
}
