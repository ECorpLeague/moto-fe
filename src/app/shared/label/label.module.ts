import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleLabelComponent } from './title-label/title-label.component';

@NgModule({
  declarations: [TitleLabelComponent],
  imports: [CommonModule],
  exports: [TitleLabelComponent]
})
export class LabelModule {}
