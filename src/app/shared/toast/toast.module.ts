import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [ToastComponent]
})
export class ToastModule {}
