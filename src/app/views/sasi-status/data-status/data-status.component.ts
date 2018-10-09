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
  sasiStatusTimeColumnObj = [
    {
      propName: 'propertyName',
      label: 'World'
    },
    {
      propName: 'purgatoryTime',
      label: 'Purgatory'
    },
    {
      propName: 'qSize',
      label: 'Validation',
      type: 'html'
    },
    {
      propName: 'paradiseTime',
      label: 'Paradise'
    },
    {
      propName: 'published_0_Time',
      label: 'Published-0'
    },
    {
      propName: 'published_1_Time',
      label: 'Published-1'
    },
    {
      propName: 'published_2_Time',
      label: 'Published-2'
    },
  ];
  columnObjects = [
    {
      propName: 'position',
      label: 'No.'
    },
    {
      propName: 'name',
      label: 'Name'
    },
    {
      propName: 'weight',
      label: 'Weight'
    },
    {
      propName: 'symbol',
      label: 'Symbol'
    }
  ];
  sasiStatusWorldColumnObj = [
    {
      propName: 'propertyName',
      label: ''
    },
    {
      propName: 'purgatoryEvents',
      label: 'Events'
    },
    {
      propName: 'purgatoryObj',
      label: 'Objects'
    },
    {
      propName: 'validationIEPM',
      label: 'IEPM'
    },
    {
      propName: 'validationExcl',
      label: 'Excl.'
    },
    {
      propName: 'validationFixed',
      label: 'Fixed'
    },
    {
      propName: 'validationOEPM',
      label: 'OEPM'
    },
    {
      propName: 'paradiseEvents',
      label: 'Events'
    },
    {
      propName: 'paradiseObj',
      label: 'Objects'
    },
    {
      propName: 'published_0_Events',
      label: 'Events'
    },
    {
      propName: 'published_0_Obj',
      label: 'Objects'
    },
    {
      propName: 'published_1_Events',
      label: 'Events'
    },
    {
      propName: 'published_1_Obj',
      label: 'Objects'
    },
    {
      propName: 'published_2_Events',
      label: 'Events'
    },
    {
      propName: 'published_2_Obj',
      label: 'Objects'
    },
  ];

  @Input() data1 = [];
  @Input() data2 = [];


  constructor() { }

  ngOnInit() {

  }

}
