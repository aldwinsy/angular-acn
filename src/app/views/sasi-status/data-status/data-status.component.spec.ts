import { dataStatus } from './../../../shared/mock/data-status.mock';
import { sasiWorldObjects } from './../../../shared/mock/sasi-world-objects-mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'sasi/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-data-status fxFlex="70" [statusTime]="statusTime" [worldObjects]="worldObjects"></app-data-status>
  `
})
class TestHostComponent {
  statusTime = dataStatus;
  worldObjects = sasiWorldObjects;
}

describe('DataStatusTestHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ DataStatusComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display no records found when no agents are available', () => {
    component.statusTime = [];
    component.worldObjects = [];
    fixture.detectChanges();
    const noRecordsFound = fixture.debugElement.query(By.css('app-no-records-found'));
    expect(noRecordsFound).toBeTruthy();
  });

});

describe('DataStatusComponent', () => {
  let component: DataStatusComponent;
  let fixture: ComponentFixture<DataStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ DataStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create data status component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the status time table', () => {
    const statusTimeTable = fixture.debugElement.query(By.css('#status-time-table'));
    expect(statusTimeTable).toBeTruthy();
  });

  it('should contain the tatus world table', () => {
    const statusWorldTable = fixture.debugElement.query(By.css('#status-world-table'));
    expect(statusWorldTable).toBeTruthy();
  });

});
