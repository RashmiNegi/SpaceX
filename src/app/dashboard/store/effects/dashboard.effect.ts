import { Filter } from './../../model/filter.model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromDashboardActions from '../actions/dashboard.action';
import { DashboardService } from './../../services/dashboard.service';
@Injectable()
export class DashboardEffect {
  constructor(
    private action$: Actions,
    private dashboardService: DashboardService
  ) { }

  @Effect()
  LoadData = this.action$.pipe(
    ofType(fromDashboardActions.LOAD_DATA),
    switchMap(() => {
      console.log('data');
      return this.dashboardService.getAllSpaceXData().pipe(
        map((resData) => {
          //   console.log(resData);
          return new fromDashboardActions.SetData(resData);
        }),
        catchError((error) => {
          return of(new fromDashboardActions.ErrorData('An Error Occured'));
        })
      );
    })
  );

  @Effect()
  LoadFilterData = this.action$.pipe(
    ofType(
      fromDashboardActions.SET_YEAR_FILTER,
      fromDashboardActions.SET_LAND_FILTER,
      fromDashboardActions.SET_LAUNCH_FILTER,
      fromDashboardActions.SET_ALL_FILTER
    ),
    switchMap((data) => {
      return this.dashboardService.getFilterData(data['payload']).pipe(
        map((resData) => {
          return new fromDashboardActions.SetData(resData);
        }),
        catchError((error) => {
          return of(new fromDashboardActions.ErrorData('An Error Occured'));
        })
      );
    })
  );
}
