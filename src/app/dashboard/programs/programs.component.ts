import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  @Input('programData') programData;

  constructor() {}

  ngOnInit(): void {}
}
