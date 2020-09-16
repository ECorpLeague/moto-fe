import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hover-border',
  template: `
    <span>
      <span>
        <span><ng-content></ng-content></span>
      </span>
    </span>
  `,
  styleUrls: ['./hover-border.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoverBorderComponent {}
