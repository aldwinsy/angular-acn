import { HttpClientModule } from '@angular/common/http';
import { CoreService } from 'sasi/core/service/core.service';
import { ParadiseSummaryMock } from 'sasi/shared/mock/paradise-summary.mock';
import { PurgatorySummaryMock } from 'sasi/shared/mock/purgatory-summary.mock';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'sasi/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PurgatoryParadiseComponent } from 'sasi/views/sasi-status/data-status/purgatory-paradise/purgatory-paradise.component';
import { of } from 'rxjs';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';


describe('PurgatoryParadiseComponent', () => {
  let component: PurgatoryParadiseComponent;
  let fixture: ComponentFixture<PurgatoryParadiseComponent>;
  const coreServiceSpy = jasmine.createSpyObj('CoreService', [
    'getPurgatorySummary',
    'getParadiseSummary'
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        RouterTestingModule.withRoutes([
          { path: 'sasi-status', component: DataStatusComponent }
        ])
      ],
      declarations: [ PurgatoryParadiseComponent, DataStatusComponent ],
      providers: [
        Location,
        { provide: CoreService, useValue: coreServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurgatoryParadiseComponent);
    component = fixture.componentInstance;
    coreServiceSpy.getPurgatorySummary.and.returnValue(of(PurgatorySummaryMock));
    coreServiceSpy.getParadiseSummary.and.returnValue(of(ParadiseSummaryMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get paradise and purgatory data on init', () => {
    expect(coreServiceSpy.getPurgatorySummary).toHaveBeenCalled();
    expect(coreServiceSpy.getParadiseSummary).toHaveBeenCalled();
    expect(component.worldObjects).not.toBe([]);
  });

  it('should contain sasi status time and world table', () => {
    const timeTable = fixture.debugElement.query(By.css('#status-time-table'));
    const worldTable = fixture.debugElement.query(By.css('#status-world-table'));
    expect(timeTable).toBeTruthy();
    expect(worldTable).toBeTruthy();
  });

  it('should show no records when no data is available', () => {
    component.statusTime = [];
    component.worldObjects = [];
    fixture.detectChanges();
    const noRecords = fixture.debugElement.query(By.css('app-no-records-found'));
    expect(noRecords).toBeTruthy();
  });

  it('navigate to "search" takes you to /search', fakeAsync(() => {
    const location = TestBed.get(Location);
    const nav = fixture.debugElement.query(By.css('#span-nav')).nativeElement;
    nav.click();
    tick();
    expect(location.path()).toBe('/sasi-status');
  }));
});
