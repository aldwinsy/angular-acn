import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { configNavItems } from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: [
    './config.component.scss',
    '../../shared/styles/box-styles.scss'
  ]
})
export class ConfigComponent implements OnInit {
  readonly configNavItems = configNavItems;

  activeLink = '';

  constructor(
    private router: ActivatedRoute
  ) {
    this.activeLink = this.router.snapshot['_routerState'].url;
  }

  ngOnInit() {
  }

}
