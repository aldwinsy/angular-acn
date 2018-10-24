import { Component, OnInit, Input } from '@angular/core';
import { sasiStatusTimeColumns, sasiStatusWorldColumns } from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-data-status',
  templateUrl: './data-status.component.html',
  styleUrls: [
    './data-status.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataStatusComponent implements OnInit {
  sasiStatusTimeColumns = sasiStatusTimeColumns;
  sasiStatusWorldColumns = sasiStatusWorldColumns;

  @Input() statusTime = [];
  @Input() worldObjects = [];

  purgatoryParadiseLink = '/sasi-status/purgatory-paradise';


  constructor() { }

  ngOnInit() {

  }

  gotToDetails(type: string) {
    console.log('type:', type);
  }

}
