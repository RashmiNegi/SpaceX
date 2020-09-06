import { Filter } from './../model/filter.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  getAllSpaceXData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getFilterData(filter: Filter) {
    console.log(filter);
    let data = 'https://api.spaceXdata.com/v3/launches?limit=100';
    let filtermap = '';
    if (filter.filterLand != null) {
      filtermap += '&land_success=' + filter.filterLand;
    }
    if (filter.filterLaunch != null) {
      filtermap += '&launch_success=' + filter.filterLaunch;
    }
    if (filter.filterYear != null) {
      filtermap += '&launch_year=' + filter.filterYear;
    }
    console.log(data + filtermap);
    return this.http.get(data + filtermap);
  }

  // getAllSpaceXDataByLaunchType(launchType: boolean) {
  //   return this.http.get(
  //     'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' +
  //       launchType
  //   );
  // }
  // getAllSpaceXDataByLandType(landType: boolean) {
  //   return this.http.get(
  //     'https://api.spaceXdata.com/v3/launches?limit=100&land_success=' +
  //       landType
  //   );
  // }
  // getAllSpaceXDataByLaunchYear(launchYear: boolean) {
  //   return this.http.get(
  //     'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=' +
  //       launchYear
  //   );
  // }

  // getAllSpaceXDataByLaunchTypeAndLandType(
  //   launchType: boolean,
  //   landType: boolean
  // ) {
  //   return this.http.get(
  //     'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' +
  //       launchType +
  //       '&land_success=' +
  //       landType
  //   );
  // }

  // getAllSpaceXDataByLaunchTypeAndLandTypeAndLaunchYear(
  //   launchType: boolean,
  //   landType: boolean,
  //   launchYear: string
  // ) {
  //   return this.http.get(
  //     'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' +
  //       launchType +
  //       '&land_success=' +
  //       landType +
  //       '&launch_year=' +
  //       launchYear
  //   );
  // }
}
