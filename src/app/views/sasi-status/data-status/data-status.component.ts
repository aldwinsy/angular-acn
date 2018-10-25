import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-status',
  templateUrl: './data-status.component.html',
  styleUrls: [
    './data-status.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataStatusComponent implements OnInit {

  @Input() statusTime = [];
  @Input() worldObjects = [];

  readonly purgatoryParadiseLink = '/sasi-status/purgatory-paradise';
  readonly publishedLink = '/sasi-status/published';


  constructor() { }

  ngOnInit() {
  }

}
