import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from './../model/filter.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input('filterData') filterData: Filter;
  @Output('selectedFilterValue')
  selectedFilterValue: EventEmitter<{}> = new EventEmitter<{}>();

  yearFilter = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  lauchFilter = ['true', 'false'];
  landFilter = ['true', 'false'];

  constructor() { }

  ngOnInit(): void { }

  selectedFilter(selectedData, type) {
    console.log(selectedData);
    console.log(type);

    this.selectedFilterValue.emit({
      filterValue: selectedData,
      filterType: type,
    });
  }
}
