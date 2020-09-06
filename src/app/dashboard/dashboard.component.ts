import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Filter } from './model/filter.model';
import { DashboardService } from './services/dashboard.service';
import { DashboardSandbox } from './store/sandbox/dashboard.sandbox';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  programData: any = [];
  yearFilter: any;
  landFilter: any;
  launchFilter: any;

  filterData: Filter = {
    filterYear: null,
    filterLand: null,
    filterLaunch: null,
  };

  constructor(
    private dashboardSandbox: DashboardSandbox,
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let querydata = this.route.snapshot.queryParams;

    if (querydata['launch_year'] != null) {
      console.log(querydata['launch_year']);
      this.filterData['filterYear'] = querydata['launch_year'];
    }
    if (querydata['land_success'] != null) {
      console.log(querydata['land_success']);
      this.filterData['filterLand'] = querydata['land_success'];
    }
    if (querydata['launch_success'] != null) {
      console.log(querydata['launch_success']);
      this.filterData['filterLaunch'] = querydata['launch_success'];
    }
    this.dashboardSandbox.SetAllFilter(this.filterData);
    console.log(this.filterData);

    this.dashboardSandbox.loadDashboardState().subscribe((data) => {
      this.programData = data.data;
      this.filterData = {
        filterYear: data.yearFilter,
        filterLand: data.landFilter,
        filterLaunch: data.launchFilter,
      };
      this.yearFilter = data.yearFilter;
      this.landFilter = data.landFilter;
      this.launchFilter = data.launchFilter;
    });
  }

  selectedFilterValue(filterData: any) {
    if (filterData.filterType == 1) {
      if (this.yearFilter != filterData.filterValue) {
        this.filterData.filterYear = filterData.filterValue;
        this.dashboardSandbox.setYearFilter(this.filterData);
      } else {
        this.filterData.filterYear = null;
        this.dashboardSandbox.setYearFilter(this.filterData);
      }
    } else if (filterData.filterType == 2) {
      if (this.launchFilter != filterData.filterValue) {
        this.filterData.filterLaunch = filterData.filterValue;
        this.dashboardSandbox.SetLaunchFilter(this.filterData);
      } else {
        this.filterData.filterLaunch = null;
        this.dashboardSandbox.SetLaunchFilter(this.filterData);
      }
    } else if (filterData.filterType == 3) {
      console.log(this.launchFilter != filterData.filterValue);
      if (this.landFilter != filterData.filterValue) {
        this.filterData.filterLand = filterData.filterValue;
        this.dashboardSandbox.SetLandFilter(this.filterData);
      } else {
        this.filterData.filterLand = null;
        this.dashboardSandbox.SetLandFilter(this.filterData);
      }
    }
    this.goToPage(this.filterData);
  }

  goToPage(pageNum: Filter) {
    let queryData = {};
    if (pageNum.filterYear != null) {
      queryData['launch_year'] = pageNum.filterYear;
    }
    if (pageNum.filterLand != null) {
      queryData['land_success'] = pageNum.filterLand;
    }
    if (pageNum.filterLaunch != null) {
      queryData['launch_success'] = pageNum.filterLaunch;
    }

    this.router.navigate([''], { queryParams: queryData });
  }
}
