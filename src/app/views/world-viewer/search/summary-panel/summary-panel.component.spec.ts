import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPanelComponent } from './summary-panel.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { worldSummaryData } from 'sasi-mock/world-summary-mock';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  template: `
    <app-summary-panel fxFlex="30" [worldSummaryData]="worldSummaryData"></app-summary-panel>
  `
})
class TestHostComponent {
  worldSummaryData = worldSummaryData;
}

describe('SummaryPanelTestHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ SummaryPanelComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the world summary table', () => {
    const summaryTable = fixture.debugElement.query(By.css('#world-summary-table'));
    expect(summaryTable).toBeTruthy();
  });

  it('should display no records found when no agents are available', () => {
    component.worldSummaryData = [];
    fixture.detectChanges();
    const noRecordsFound = fixture.debugElement.query(By.css('app-no-records-found'));
    expect(noRecordsFound).toBeTruthy();
  });

});

describe('SummaryPanelComponent', () => {
  let component: SummaryPanelComponent;
  let fixture: ComponentFixture<SummaryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ SummaryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create world summary panel component', () => {
    expect(component).toBeTruthy();
  });

});
