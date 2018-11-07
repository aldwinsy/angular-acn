import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './shared/styles/box-styles.scss'
  ],
  animations: [
    trigger('showHideBanner', [
      state('hide', style({ display: 'none' })),
      transition('show => hide', [
        animate('2s', style({ opacity: 0 })),
      ])
    ])
  ]
})

export class AppComponent {
  readonly title = 'sasi-ui';
  darkTheme = false;
  showBanner = true;

  changeTheme(value) {
    this.darkTheme = value;
  }
}
