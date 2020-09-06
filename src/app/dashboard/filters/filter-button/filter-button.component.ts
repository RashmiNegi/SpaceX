import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent implements OnInit {
  @Input('filterData') filterData;
  @Input('filterType') filterType;
  @Input('selectedFilterValue') selectedFilterValue: string;
  @Output('selectedFilter') selectedFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  selectFilter(filter: string) {
    this.selectedFilter.emit(filter);
  }
}
