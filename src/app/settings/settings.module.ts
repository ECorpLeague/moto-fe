import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SETTINGS_FEATURE_KEY,
  settingsReducer
} from './+state/settings.reducer';
import { SettingsEffects } from './+state/settings.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SETTINGS_FEATURE_KEY, settingsReducer),
    EffectsModule.forFeature([SettingsEffects])
  ]
})
export class SettingsModule {}
