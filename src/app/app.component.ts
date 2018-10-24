import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sasi-ui';
  darkTheme = false;

  changeTheme(value) {
    this.darkTheme = value;
  }
}
