import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'app-title-label',
  template: `
    <h1 [class.isActive]="isActive">
      {{ title }}
    </h1>
    <div class="actions">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./title-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleLabelComponent {
  @Input() title: string;
  @HostBinding('class.isActive') @Input() isActive = true;
}
