import { Component, OnInit } from '@angular/core';
import { headerNavItems } from 'sasi/shared/variables/global-variables';


@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  public navItems = headerNavItems;

  ngOnInit() {
  }

}
