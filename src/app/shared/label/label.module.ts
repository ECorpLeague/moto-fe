import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleLabelComponent } from './title-label/title-label.component';
import { MatchLabelComponent } from './match-label/match-label.component';

@NgModule({
  declarations: [TitleLabelComponent, MatchLabelComponent],
  imports: [CommonModule],
  exports: [TitleLabelComponent, MatchLabelComponent]
})
export class LabelModule {}
