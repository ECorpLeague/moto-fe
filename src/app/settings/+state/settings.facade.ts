import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from './settings.model';
import { SettingsSelectors } from './settings.selectors';

@Injectable({
  providedIn: 'root'
})
export class SettingsFacade {
  constructor(private store: Store<any>) {}

  isMobile$: Observable<boolean> = this.store.select(
    SettingsSelectors.selectIsMobile
  );

  activeLanguage$: Observable<Language> = this.store.select(
    SettingsSelectors.selectActiveLanguage
  );
}
