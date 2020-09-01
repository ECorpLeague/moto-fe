import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderModule } from './header/header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    DashboardModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'MotoCSGO',
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
