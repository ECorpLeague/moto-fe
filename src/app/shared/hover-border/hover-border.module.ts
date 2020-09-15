import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBorderComponent } from './hover-border/hover-border.component';

@NgModule({
  declarations: [HoverBorderComponent],
  imports: [CommonModule],
  exports: [HoverBorderComponent]
})
export class HoverBorderModule {}
