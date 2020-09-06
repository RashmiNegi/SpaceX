import * as fromDashboard from '../../dashboard/store/reducer/dashboard.reducer';
import { ActionReducerMap } from '@ngrx/store';
export interface AppState {
  dashboard: fromDashboard.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  dashboard: fromDashboard.dashboardReducer,
};
