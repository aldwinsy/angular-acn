import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportComponent } from './data-report.component';
import { dataAgentsMock } from 'sasi/shared/mock/data-agents.mock';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'sasi/shared/shared.module';

@Component({
  template: `
    <app-data-report fxFlex="30" [dataAgentList]="dataAgentList"></app-data-report>
  `
})
class TestHostComponent {
  dataAgentList = dataAgentsMock;
}

describe('DataReportTestHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ DataReportComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display number of agents', () => {
    const agentCount = fixture.debugElement.query(By.css('#agent-count'));
    // @NOTE: inside matBadge material component
    expect(agentCount.attributes['ng-reflect-content']).toEqual(`${component.dataAgentList.length}`);
  });

  it('should display available agents', () => {
    const agentCards = fixture.debugElement.queryAll(By.css('#agent-card'));
    expect(agentCards.length).toEqual(component.dataAgentList.length);
  });

  it('should display no records found when no agents are available', () => {
    component.dataAgentList = [];
    fixture.detectChanges();
    const noRecordsFound = fixture.debugElement.query(By.css('app-no-records-found'));
    expect(noRecordsFound).toBeTruthy();
  });

});

describe('DataReportComponent', () => {
  let component: DataReportComponent;
  let fixture: ComponentFixture<DataReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule],
      declarations: [ DataReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create data report component', () => {
    expect(component).toBeTruthy();
  });
});
