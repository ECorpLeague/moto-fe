import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderModule } from './header/header.module';
import { SettingsModule } from './settings/settings.module';
import { MatchesModule } from './matches/matches.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TranslateModule } from './settings/translate.module';
import { environment } from '../environments/environment';
import icons from '../assets/svg/svg-icons';
import { GraphQLModule } from './graphql/graphql.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    MatchesModule,
    SettingsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'MotoCSGO',
      logOnly: environment.production
    }),
    EffectsModule.forRoot(),
    BrowserAnimationsModule,
    SvgIconsModule.forRoot({
      icons
    }),
    TranslateModule,
    GraphQLModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
