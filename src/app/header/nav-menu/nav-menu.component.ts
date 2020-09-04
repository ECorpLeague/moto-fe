import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsFacade } from '../../settings/+state/settings.facade';

@Component({
  selector: 'app-nav-menu',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #sidenav
        class="sidenav"
        fixedInViewport
        [attr.role]="
          (settingsFacade.isMobile$ | async) ? 'dialog' : 'navigation'
        "
        [mode]="(settingsFacade.isMobile$ | async) ? 'over' : 'side'"
      >
        <mat-toolbar
          ><div>Menu</div>
          <button mat-icon-button (click)="sidenav.close()">
            <mat-icon>more_vert</mat-icon>
          </button>
        </mat-toolbar>
        <mat-nav-list>
          <ng-container [ngTemplateOutlet]="list"></ng-container>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <a class="logo" [routerLink]="['/']">
            <img src="/assets/images/motologo.png" />
            <div class="text">Motoliga</div>
          </a>
          <ng-container
            *ngIf="!(settingsFacade.isMobile$ | async)"
            [ngTemplateOutlet]="list"
          ></ng-container>
          <button
            *ngIf="settingsFacade.isMobile$ | async"
            type="button"
            class="menu-button"
            mat-icon-button
            (click)="sidenav.toggle()"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
        </mat-toolbar>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <ng-template #list>
      <a
        [routerLink]="['/']"
        [routerLinkActive]="['active']"
        [routerLinkActiveOptions]="{ exact: true }"
        >About</a
      >
      <a
        [routerLink]="['/bracket']"
        [routerLinkActive]="['active']"
        [routerLinkActiveOptions]="{ exact: true }"
        >Bracket</a
      >
    </ng-template>
  `,
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {
  constructor(public settingsFacade: SettingsFacade) {}
}
