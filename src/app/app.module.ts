import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuBarComponent } from './dashboard/menu-bar/menu-bar.component';
import { FilterButtonComponent } from './dashboard/filters/filter-button/filter-button.component';
import { FiltersComponent } from './dashboard/filters/filters.component';
import { ProgramDetailsComponent } from './dashboard/programs/program-details/program-details.component';
import { ProgramsComponent } from './dashboard/programs/programs.component';
import { DashboardEffect } from './dashboard/store/effects/dashboard.effect';
import { appReducer } from './store/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DashboardComponent,
    FiltersComponent,
    ProgramsComponent,
    ProgramDetailsComponent,
    FilterButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([DashboardEffect])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
