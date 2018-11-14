import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { geFooter } from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  readonly geLogoSrc = '../../../assets/ge-logo.png';
  readonly geFooter = geFooter;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'tumblr',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/tumblr.svg')
    );
  }

}
