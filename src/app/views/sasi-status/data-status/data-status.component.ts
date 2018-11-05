import { Component, OnInit, Input } from '@angular/core';
import { sasiStatusLabels, sasiStatusCardLabels } from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-data-status',
  templateUrl: './data-status.component.html',
  styleUrls: [
    './data-status.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataStatusComponent implements OnInit {
  readonly dataStatusLabel = sasiStatusLabels.dataStatus;
  readonly sasiStatusCardLabels = sasiStatusCardLabels;
  readonly purgatoryParadiseLink = '/sasi-status/purgatory-paradise';
  readonly publishedLink = '/sasi-status/published';

  @Input() statusTime = [];
  @Input() worldObjects = [];

  constructor() { }

  ngOnInit() {
  }

}
