import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { MatIconModule } from '@angular/material/icon';
import { NewsColumnComponent } from './news-column/news-column.component';
import { LabelModule } from '../shared/label/label.module';
import { NewsCardComponent } from './news-card/news-card.component';
import { TranslateModule } from '../settings/translate.module';

@NgModule({
  declarations: [HomePageComponent, NewsColumnComponent, NewsCardComponent],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    MatButtonModule,
    LabelModule,
    SvgIconsModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule {}
