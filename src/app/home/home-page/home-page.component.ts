import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { SettingsFacade } from '../../settings/+state/settings.facade';
import { NewsColumnComponent } from '../news-column/news-column.component';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="front">
      <div class="text">
        <h1 class="title">Motoliga</h1>
        <p class="subtitle">Motorola Solutions CS:GO League</p>
        <p class="description">
          Kim jesteśmy? Ludźmi dzielącymi pasje do gier komputerowych.
          Pracujemy, na co dzień w Motorola Solutions Systems Polska, część z
          nas widziałby się pomiędzy profesjonalnymi graczami ;) a część dopiero
          zaczyna przygodę z CS:GO, ale wszystkim przyświeca jeden główny cel,
          czyli dobrze się bawić.
        </p>
        <button mat-stroked-button color="accent">
          Read more
        </button>
        <div class="contact">
          <svg-icon key="steam"></svg-icon>
          <svg-icon
            class="youtube"
            key="youtube"
            color="var(--secondary-color)"
          ></svg-icon>
        </div>
      </div>
      <button
        *ngIf="settingsFacade.isMobile$ | async"
        mat-icon-button
        class="scroll-to-bottom-btn"
        (click)="scrollToBottom()"
      >
        <mat-icon>arrow_forward_ios</mat-icon>
      </button>
    </div>
    <app-news-column #news></app-news-column>
  `,
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  @ViewChild(NewsColumnComponent, { read: ElementRef })
  newsComponent: ElementRef;

  constructor(public settingsFacade: SettingsFacade) {}

  scrollToBottom(): void {
    this.newsComponent.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  }
}
