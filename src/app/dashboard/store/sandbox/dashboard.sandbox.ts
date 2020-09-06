import { Filter } from './../../model/filter.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../../store/reducers/app.reducer';
import * as fromDashboardActions from '../actions/dashboard.action';

@Injectable({ providedIn: 'root' })
export class DashboardSandbox {
  constructor(private store: Store<fromAppState.AppState>) { }

  loadDashboardState() {
    return this.store.select('dashboard');
  }

  fetchDahboardData() {
    this.store.dispatch(new fromDashboardActions.LoadData());
  }

  SetAllFilter(filter: Filter) {
    this.store.dispatch(new fromDashboardActions.SetAllFilter(filter));
  }
  setYearFilter(filter: Filter) {
    this.store.dispatch(new fromDashboardActions.SetYearFilter(filter));
  }

  SetLandFilter(filter: Filter) {
    this.store.dispatch(new fromDashboardActions.SetLandFilter(filter));
  }

  SetLaunchFilter(filter: Filter) {
    this.store.dispatch(new fromDashboardActions.SetLaunchFilter(filter));
  }

  loadFilterData(
    yearFilter: string,
    landFilter: string,
    launchFilter: string
  ) { }
}
