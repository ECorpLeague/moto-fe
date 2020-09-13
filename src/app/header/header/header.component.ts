import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Language } from '../../settings/+state/settings.model';
import { SettingsFacade } from '../../settings/+state/settings.facade';
import { SettingsActions } from 'src/app/settings/+state/settings.actions';

@Component({
  selector: 'app-header',
  template: `
    <mat-sidenav-container>
      <mat-sidenav
        #sidenav
        fixedInViewport
        [attr.role]="
          (settingsFacade.isMobile$ | async) ? 'dialog' : 'navigation'
        "
        [mode]="(settingsFacade.isMobile$ | async) ? 'over' : 'side'"
      >
        <img class="sidenav-logo" src="/assets/images/motologo.png" />
        <ng-container [ngTemplateOutlet]="list"></ng-container>
        <button
          mat-icon-button
          class="sidenav-btn-close"
          (click)="closeSidenav()"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar>
          <a class="toolbar-logo" [routerLink]="['/']">
            <img src="/assets/images/motologo.png" />
            <div class="text">Motoliga</div>
          </a>
          <ng-container
            *ngIf="!(settingsFacade.isMobile$ | async)"
            [ngTemplateOutlet]="list"
          ></ng-container>
          <div class="right-items">
            <div class="languages">
              <svg-icon
                key="poland"
                [class.inactive]="
                  (settingsFacade.activeLanguage$ | async) !== 'pl'
                "
                (click)="setLanguage(Language.PL)"
              ></svg-icon>
              <svg-icon
                key="unitedKingdom"
                [class.inactive]="
                  (settingsFacade.activeLanguage$ | async) !== 'en'
                "
                (click)="setLanguage(Language.EN)"
              ></svg-icon>
            </div>
            <button
              *ngIf="settingsFacade.isMobile$ | async"
              class="btn-menu"
              mat-icon-button
              (click)="toggleSidenav()"
            >
              <mat-icon *ngIf="!sidenav.opened">menu</mat-icon>
            </button>
          </div>
        </mat-toolbar>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <ng-template #list>
      <a
        [routerLink]="['/']"
        [routerLinkActive]="['active']"
        [routerLinkActiveOptions]="{ exact: true }"
        (click)="closeSidenav()"
      >
        {{ 'HEADER.HOME' | transloco }}</a
      >
      <a
        [routerLink]="['/bracket']"
        [routerLinkActive]="['active']"
        [routerLinkActiveOptions]="{ exact: true }"
        (click)="closeSidenav()"
        >{{ 'HEADER.BRACKET' | transloco }}</a
      >
    </ng-template>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  Language = Language;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    public settingsFacade: SettingsFacade,
    private store: Store<any>
  ) {}

  closeSidenav(): void {
    this.sidenav.close();
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  setLanguage(language: Language): void {
    this.store.dispatch(SettingsActions.languageChanged({ language }));
  }
}
