import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  private navItems = [
    {
      id: 'sasi-status',
      label: 'STATUS'
    },
    {
      id: 'world-viewer',
      label: 'WORLD VIEWER'
    },
    {
      id: 'dps',
      label: 'DPS'
    },
    {
      id: 'config',
      label: 'CONFIG'
    },
    {
      id: 'documentation',
      label: 'DOCUMENTATION'
    }
  ];

  ngOnInit() {
  }

}
