import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { SettingsFacade } from '../../settings/+state/settings.facade';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-menu',
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
          <button
            *ngIf="settingsFacade.isMobile$ | async"
            class="btn-menu"
            mat-icon-button
            (click)="toggleSidenav()"
          >
            <mat-icon *ngIf="!sidenav.opened">menu</mat-icon>
          </button>
        </mat-toolbar>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <ng-template #list>
      <a
        [routerLink]="['/']"
        [routerLinkActive]="['active']"
        [routerLinkActiveOptions]="{ exact: true }"
        (click)="closeSidenav()"
        >About</a
      >
      <a
        [routerLink]="['/bracket']"
        [routerLinkActive]="['active']"
        [routerLinkActiveOptions]="{ exact: true }"
        (click)="closeSidenav()"
        >Bracket</a
      >
    </ng-template>
  `,
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(public settingsFacade: SettingsFacade) {}

  closeSidenav(): void {
    this.sidenav.close();
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
