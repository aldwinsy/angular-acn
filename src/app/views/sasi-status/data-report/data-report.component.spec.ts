import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataReportComponent } from './data-report.component';
import { dataAgentsMock } from 'sasi/shared/mock/data-agents.mock';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'sasi/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';

describe('DataReportComponent', () => {
  let component: DataReportComponent;
  let fixture: ComponentFixture<DataReportComponent>;

  const mockSasiStatusService = jasmine.createSpyObj('SasiStatusService', ['getSasiStatusAgentList']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule
      ],
      declarations: [ DataReportComponent ],
      providers: [
        { provide: SasiStatusService, useValue: mockSasiStatusService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportComponent);
    component = fixture.componentInstance;
    mockSasiStatusService.getSasiStatusAgentList.and.returnValue(of(dataAgentsMock));
    fixture.detectChanges();
  });

  it('should getSasiStatusAgentList() on init', () => {
    expect(mockSasiStatusService.getSasiStatusAgentList).toHaveBeenCalled();
  });

  it('should display number of loading agents', () => {
    const agentCount = fixture.debugElement.query(By.css('#agent-count'));
    // @NOTE: inside matBadge material component
    expect(agentCount.attributes['ng-reflect-content']).toEqual('2');
  });

  it('should display total number of agents', () => {
    const totalAgentCount = fixture.debugElement.query(By.css('#span-agent-total')).nativeElement;
    expect(totalAgentCount.textContent).toEqual(`Total ${component.dataAgentList.length}`);
  });

  it('should display available agents', () => {
    const agentCards = fixture.debugElement.queryAll(By.css('#agent-card'));
    expect(agentCards.length).toEqual(component.dataAgentList.length);
  });

  it('should display description icon for xml card agent', () => {
    component.dataAgentList = [{
      name: 'XML File Agent',
      context: 'Oct 24 to 26',
      status : 'LOADING',
      lastRequest : '30 seconds ago',
      lastEventRecorded : '20 seconds ago',
      lastEventProcessed : '20 seconds ago',
      delta : '2',
      type: 'Custom Agent'
    }];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(By.css('#agent-card'));
    const cardIcon = agentCard.query(By.css('mat-icon')).nativeElement;
    expect(cardIcon.textContent).toEqual('description');
  });

  it('should display flight_takeoff icon for custom card agent', () => {
    component.dataAgentList = [{
      name: 'Custom Agent',
      context: 'Oct 24 to 26',
      status : 'LOADING',
      lastRequest : '30 seconds ago',
      lastEventRecorded : '20 seconds ago',
      lastEventProcessed : '20 seconds ago',
      delta : '2',
      type: 'Custom Agent'
    }];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(By.css('#agent-card'));
    const cardIcon = agentCard.query(By.css('mat-icon')).nativeElement;
    expect(cardIcon.textContent).toEqual('flight_takeoff');
  });

  it('should display history icon for restart card agent', () => {
    component.dataAgentList = [{
      name: 'Restart Agent',
      context: 'Oct 24 to 26',
      status : 'STOPPED',
      lastRequest : '30 seconds ago',
      lastEventRecorded : '20 seconds ago',
      lastEventProcessed : '20 seconds ago',
      delta : '2',
      type: 'Built-in Agent'
    }];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(By.css('#agent-card'));
    const cardIcon = agentCard.query(By.css('mat-icon')).nativeElement;
    expect(cardIcon.textContent).toEqual('history');
  });

  it('should display error_outline icon when agent status is FAILED', () => {
    component.dataAgentList = [{
      name: 'Custom Agent',
      context: 'Oct 24 to 26',
      status : 'FAILED',
      lastRequest : '30 seconds ago',
      lastEventRecorded : '20 seconds ago',
      lastEventProcessed : '20 seconds ago',
      delta : '2',
      type: 'Custom Agent'
    }];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(By.css('#agent-card'));
    const errorIcon = agentCard.query(By.css('#error-icon'));
    expect(errorIcon).toBeTruthy();
  });

  it('should display progress bar when when agent status is LOADING', () => {
    component.dataAgentList = [{
      name: 'Custom Agent',
      context: 'Oct 24 to 26',
      status : 'LOADING',
      lastRequest : '30 seconds ago',
      lastEventRecorded : '20 seconds ago',
      lastEventProcessed : '20 seconds ago',
      delta : '2',
      type: 'Custom Agent'
    }];
    fixture.detectChanges();
    const agentCard: DebugElement = fixture.debugElement.query(By.css('#agent-card'));
    const progressbar = agentCard.query(By.css('mat-progress-bar'));
    expect(progressbar).toBeTruthy();
  });

  it('should display no records found when no agents are available', () => {
    component.dataAgentList = [];
    fixture.detectChanges();
    const noRecordsFound = fixture.debugElement.query(By.css('app-no-records-found'));
    expect(noRecordsFound).toBeTruthy();
  });
});
