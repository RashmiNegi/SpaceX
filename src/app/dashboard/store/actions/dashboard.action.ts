import { Action } from '@ngrx/store';
import { Filter } from './../../model/filter.model';

export const SET_YEAR_FILTER = '[dashboard] SET_YEAR_FILTER';
export const SET_LAND_FILTER = '[dashboard] SET_LAND_FILTER';
export const SET_LAUNCH_FILTER = '[dashboard] SET_LAUNCH_FILTER';
export const SET_ALL_FILTER = '[dashboard] SET_ALL_FILTER';
export const LOAD_DATA = '[dashboard] LOAD_DATA';
export const SET_DATA = '[dashboard] SET_DATA';
export const ERROR_DATA = '[dashboard] ERROR_DATA';

export class SetYearFilter implements Action {
  readonly type = SET_YEAR_FILTER;
  constructor(public payload: Filter) { }
}
export class SetLandFilter implements Action {
  readonly type = SET_LAND_FILTER;
  constructor(public payload: Filter) { }
}
export class SetAllFilter implements Action {
  readonly type = SET_ALL_FILTER;
  constructor(public payload: Filter) { }
}
export class SetLaunchFilter implements Action {
  readonly type = SET_LAUNCH_FILTER;
  constructor(public payload: Filter) { }
}
export class LoadData implements Action {
  readonly type = LOAD_DATA;
  // constructor(public payload: any) {}
}
export class SetData implements Action {
  readonly type = SET_DATA;
  constructor(public payload: any) { }
}
export class ErrorData implements Action {
  readonly type = ERROR_DATA;
  constructor(public payload: any) { }
}

export type DashboardActionType =
  | SetYearFilter
  | SetLandFilter
  | SetLaunchFilter
  | LoadData
  | SetData
  | ErrorData
  | SetAllFilter;
