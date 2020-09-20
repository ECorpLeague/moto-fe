import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: ``,
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  @Input() size = 1;

  @HostBinding('style.width.rem') get getWidth(): number {
    return this.size;
  }
  @HostBinding('style.height.rem') get getHeight(): number {
    return this.size;
  }
}
