import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface SelectOption {
  key: string;
  displayValue: string;
}

@Component({
  selector: 'app-select',
  template: `
    <select *ngIf="!!options.length">
      <option *ngFor="let option of options" value="option.key">{{
        option.displayValue
      }}</option>
    </select>
  `,
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() options: SelectOption[];
}
