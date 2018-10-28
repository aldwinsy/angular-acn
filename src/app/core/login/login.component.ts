import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  toBeConfirmedList: string[] = ['local_florist'];

  confirmedList: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.toBeConfirmedList, event.previousIndex, event.currentIndex);
    }
  }

}
