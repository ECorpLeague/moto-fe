import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  template: `
    <div class="content">
      <mat-icon>warning</mat-icon>
      <div>
        {{ data.message }}
      </div>
    </div>
    <div class="action">
      <button mat-button (click)="snackBarRef.closeWithAction()">
        {{ data.action }}
      </button>
    </div>
  `,
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<ToastComponent>
  ) {}
}
