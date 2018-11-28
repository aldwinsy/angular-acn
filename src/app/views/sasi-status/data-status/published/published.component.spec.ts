import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'sasi/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CoreService } from 'sasi/core/service/core.service';

import { of } from 'rxjs';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';
import { PublishedComponent } from 'sasi/views/sasi-status/data-status/published/published.component';
import { PublishedSummaryMock } from 'sasi/shared/mock/published-summary.mock';


describe('PublishedComponent', () => {
  let component: PublishedComponent;
  let fixture: ComponentFixture<PublishedComponent>;
  const coreServiceSpy = jasmine.createSpyObj('CoreService', [
    'getPublishedWorld',
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
      declarations: [ PublishedComponent, DataStatusComponent ],
      providers: [
        Location,
        { provide: CoreService, useValue: coreServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedComponent);
    component = fixture.componentInstance;
    coreServiceSpy.getPublishedWorld.and.returnValue(of(PublishedSummaryMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get published data on init', () => {
    expect(coreServiceSpy.getPublishedWorld).toHaveBeenCalled();
    expect(component.worldObjects).toBeDefined();
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
