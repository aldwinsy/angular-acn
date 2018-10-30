import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'sasi/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { of } from 'rxjs';
import { dataStatus } from 'sasi/shared/mock/data-status.mock';
import { sasiWorldObjects } from 'sasi/shared/mock/sasi-world-objects-mock';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';
import { PublishedComponent } from 'sasi/views/sasi-status/data-status/published/published.component';


describe('PublishedComponent', () => {
  let component: PublishedComponent;
  let fixture: ComponentFixture<PublishedComponent>;
  const sasiStatusServiceSpy = jasmine.createSpyObj('SasiStatusService', [
    'getSasiStatusWorldObjects',
    'getSasiStatusTime'
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
        { provide: SasiStatusService, useValue: sasiStatusServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedComponent);
    component = fixture.componentInstance;
    sasiStatusServiceSpy.getSasiStatusTime.and.returnValue(of(dataStatus));
    sasiStatusServiceSpy.getSasiStatusWorldObjects.and.returnValue(of(sasiWorldObjects));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSasiStatusTime() and getSasiStatusWorldObjects() on init', () => {
    expect(sasiStatusServiceSpy.getSasiStatusTime).toHaveBeenCalled();
    expect(sasiStatusServiceSpy.getSasiStatusWorldObjects).toHaveBeenCalled();
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
