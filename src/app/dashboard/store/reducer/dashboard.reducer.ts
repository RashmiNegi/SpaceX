import * as fromDashboardAction from '../actions/dashboard.action';

export interface State {
  yearFilter: string;
  landFilter: string;
  launchFilter: string;
  loadDataStatus: boolean;
  data: any;
  error: string;
}
const initialState: State = {
  yearFilter: null,
  landFilter: null,
  launchFilter: null,
  loadDataStatus: false,
  data: [],
  error: null,
};
export function dashboardReducer(
  state = initialState,
  action: fromDashboardAction.DashboardActionType
) {
  switch (action.type) {
    case fromDashboardAction.SET_ALL_FILTER:
      return {
        ...state,
        yearFilter: action.payload.filterYear,
        launchFilter: action.payload.filterLaunch,
        landFilter: action.payload.filterLand,
        loadDataStatus: true,
      };
    case fromDashboardAction.SET_YEAR_FILTER:
      return {
        ...state,
        yearFilter: action.payload.filterYear,
        loadDataStatus: true,
      };
    case fromDashboardAction.SET_LAND_FILTER:
      return {
        ...state,
        landFilter: action.payload.filterLand,
        loadDataStatus: true,
      };
    case fromDashboardAction.SET_LAUNCH_FILTER:
      return {
        ...state,
        launchFilter: action.payload.filterLaunch,
        loadDataStatus: true,
      };
    case fromDashboardAction.LOAD_DATA:
      return {
        ...state,
        loadDataStatus: true,
      };
    case fromDashboardAction.SET_DATA:
      return {
        ...state,
        data: action.payload,
        error: null,
        loadDataStatus: false,
      };
    case fromDashboardAction.ERROR_DATA:
      return {
        ...state,
        // data: action.payload,
        error: action.payload,
        loadDataStatus: false,
      };
  }
}
