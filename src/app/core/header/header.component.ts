import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() readonly changeTheme = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  themeToggle(value) {
    console.log(value);
    this.changeTheme.emit(value);
  }

}
