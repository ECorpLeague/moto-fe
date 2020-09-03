import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsFacade } from 'src/app/settings/+state/settings.facade';

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
        <mat-toolbar>Menu</mat-toolbar>
        <a (click)="sidenav.close()">xd</a>
        <mat-nav-list>
          <ng-container [ngTemplateOutlet]="list"></ng-container>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <a class="logo">
            <img src="/assets/images/motologo.png" />
            <div class="text">Motoliga</div>
          </a>
          <ng-container [ngTemplateOutlet]="list"></ng-container>
          <button
            *ngIf="settingsFacade.isMobile$ | async"
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="sidenav.toggle()"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
        </mat-toolbar>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <ng-template #list>
      <a>About</a>
      <a>Bracket</a>
      <a>Hall of glory</a>
    </ng-template>
  `,
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {
  constructor(public settingsFacade: SettingsFacade) {}
}
