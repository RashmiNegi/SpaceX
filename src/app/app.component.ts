import { DashboardSandbox } from './dashboard/store/sandbox/dashboard.sandbox';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spacex';
  constructor(private dashboardSandbox: DashboardSandbox) {}
  ngOnInit() {
    // this.dashboardSandbox.fetchDahboardData();
  }
}
