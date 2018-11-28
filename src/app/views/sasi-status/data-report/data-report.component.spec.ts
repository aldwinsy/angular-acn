import { CoreService } from 'sasi/core/service/core.service';
import { DataAgent } from 'sasi/shared/models/data-agent.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataReportComponent } from './data-report.component';
import { dataAgentsMock } from 'sasi/shared/mock/data-agents.mock';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'sasi/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';

describe('DataReportComponent', () => {
  let component: DataReportComponent;
  let fixture: ComponentFixture<DataReportComponent>;

  const coreServiceSpy = jasmine.createSpyObj('SasiStatusService', [
    'getDataAgentList'
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [DataReportComponent],
      providers: [
        { provide: CoreService, useValue: coreServiceSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportComponent);
    component = fixture.componentInstance;
    coreServiceSpy.getDataAgentList.and.returnValue(
      of(dataAgentsMock)
    );
    fixture.detectChanges();
  });

  it('should get Data Agent List on init', () => {
    expect(coreServiceSpy.getDataAgentList).toHaveBeenCalled();
  });

  it('should display number of loading agents', () => {
    const agentCount = fixture.debugElement.query(By.css('#agent-count'));
    // @NOTE: inside matBadge material component
    expect(agentCount.attributes['ng-reflect-content']).toEqual('1');
  });

  it('should display total number of agents', () => {
    const totalAgentCount = fixture.debugElement.query(
      By.css('#span-agent-total')
    ).nativeElement;
    expect(totalAgentCount.textContent).toEqual(
      `Total ${component.dataAgentList.length}`
    );
  });

  it('should display available agents', () => {
    const agentCards = fixture.debugElement.queryAll(By.css('#agent-card'));
    expect(agentCards.length).toEqual(component.dataAgentList.length);
  });

  it('should display description icon for xml card agent', () => {
    const agent = {
      agentName: 'XML File Agent',
      canInitiateDataLoad: false,
      context: 'Nov 10 to 16',
      dataLoadSequence: 0,
      hasDataLoad: true,
      lastRequest: '2018-11-14 11:10Z',
      status: 'LOADING'
    };
    component.dataAgentList = [new DataAgent(agent)];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(
      By.css('#agent-card')
    );
    const cardIcon = agentCard.query(By.css('mat-icon')).nativeElement;
    expect(cardIcon.textContent).toEqual('description');
  });

  it('should display flight_takeoff icon for custom card agent', () => {
    const agent = {
      agentName: 'Custom Agent',
      canInitiateDataLoad: false,
      context: 'Nov 10 to 16',
      dataLoadSequence: 0,
      hasDataLoad: true,
      lastRequest: '2018-11-14 11:10Z',
      status: 'LOADING'
    };
    component.dataAgentList = [new DataAgent(agent)];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(
      By.css('#agent-card')
    );
    const cardIcon = agentCard.query(By.css('mat-icon')).nativeElement;
    expect(cardIcon.textContent).toEqual('flight_takeoff');
  });

  it('should display history icon for restart card agent', () => {
    const agent = {
      agentName: 'Restart Agent',
      context: 'Oct 24 to 26',
      status: 'STOPPED',
      lastRequest: '2017-11-18 11:10Z',
      hasDataLoad: true,
      canInitiateDataLoad: false,
      dataLoadSequence: 0
    };
    component.dataAgentList = [new DataAgent(agent)];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(
      By.css('#agent-card')
    );
    const cardIcon = agentCard.query(By.css('mat-icon')).nativeElement;
    expect(cardIcon.textContent).toEqual('history');
  });

  it('should display error_outline icon when agent status is FAILED', () => {
    const agent = {
      agentName: 'Restart Agent',
      context: 'Oct 24 to 26',
      status: 'FAILED',
      lastRequest: '2017-11-18 11:10Z',
      hasDataLoad: true,
      canInitiateDataLoad: false,
      dataLoadSequence: 0
    };
    component.dataAgentList = [new DataAgent(agent)];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(
      By.css('#agent-card')
    );
    const errorIcon = agentCard.query(By.css('#error-icon'));
    expect(errorIcon).toBeTruthy();
  });

  it('should display progress bar when when agent status is LOADING', () => {
    const agent = {
      agentName: 'Restart Agent',
      context: 'Oct 24 to 26',
      status: 'LOADING',
      lastRequest: '2017-11-18 11:10Z',
      hasDataLoad: true,
      canInitiateDataLoad: false,
      dataLoadSequence: 0
    };
    component.dataAgentList = [new DataAgent(agent)];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(
      By.css('#agent-card')
    );
    const progressbar = agentCard.query(By.css('mat-progress-bar'));
    expect(progressbar).toBeTruthy();
  });

  it('should display no records found when no agents are available', () => {
    component.dataAgentList = [];
    fixture.detectChanges();
    const noRecordsFound = fixture.debugElement.query(
      By.css('app-no-records-found')
    );
    expect(noRecordsFound).toBeTruthy();
  });
});
