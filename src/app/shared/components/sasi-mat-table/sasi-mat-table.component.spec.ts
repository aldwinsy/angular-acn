import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'sasi/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-sasi-mat-table
    [columnObjects]="columnObjects"
    [data]="data"
    [hasSelectAll]="false"
    sortedColumn="column1"></app-sasi-mat-table>
  `
})
class TestHostComponent {
  columnObjects = [
    { propName: 'column1', label: 'column1'},
    { propName: 'column2', label: 'column2'},
    { propName: 'column3', label: 'column3'}
  ];
  data = [
    { column1: 'a', column2: 'b', column3: 'c'},
    { column1: 'd', column2: 'e', column3: 'f'},
    { column1: '1', column2: '2', column3: '3'}
  ];
}

describe('SasiMatTableComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations : [ TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
