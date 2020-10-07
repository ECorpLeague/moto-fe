import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { SettingsActions } from './settings/+state/settings.actions';
import { SettingsFacade } from './settings/+state/settings.facade';
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="main" #main>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <app-matches-column
        *ngIf="!(settingsFacade.isMobile$ | async)"
      ></app-matches-column>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('main') main: ElementRef;
  private destroy$ = new Subject<void>();

  constructor(
    public settingsFacade: SettingsFacade,
    private store: Store<any>,
    private router: Router
  ) {
    this.store.dispatch(SettingsActions.init());
  }

  ngOnInit(): void {
    this.backToTopIfRouterChanged();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private backToTopIfRouterChanged(): void {
    this.router.events
      .pipe(
        filter(x => x instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.main.nativeElement.scrollTo(0, 0));
  }
}
