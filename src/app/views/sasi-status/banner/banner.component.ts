import { Component, OnInit } from '@angular/core';
import { geLogoImgSrc } from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  readonly geLogoSrc = geLogoImgSrc;

  constructor() { }

  ngOnInit() {
  }

}
