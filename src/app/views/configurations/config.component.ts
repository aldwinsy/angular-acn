import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  activeLink = '';
  configNavItems = [
    {
      id: '/config/data-server',
      label: 'DATA SERVER'
    },
    {
      id: '/config/file-agent',
      label: 'XML FILE AGENT'
    },
    {
      id: '/config/restart-agent',
      label: 'RESTART AGENT'
    },
    {
      id: '/config/file-upload',
      label: 'FILE UPLOAD'
    }
  ];

  constructor(
    private router: ActivatedRoute
  ) {
    this.activeLink = this.router.snapshot['_routerState'].url;
  }

  ngOnInit() {
  }

}
