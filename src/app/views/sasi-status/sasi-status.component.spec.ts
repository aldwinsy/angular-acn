import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasiStatusComponent } from './sasi-status.component';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';
import { DataReportComponent } from 'sasi/views/sasi-status/data-report/data-report.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { By } from '@angular/platform-browser';

describe('SasiStatusComponent', () => {
  let component: SasiStatusComponent;
  let fixture: ComponentFixture<SasiStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule
       ],
      declarations: [
        SasiStatusComponent,
        DataStatusComponent,
        DataReportComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasiStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create sasi status component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain data status panel', () => {
    const dataStatus = fixture.debugElement.query(By.css('app-data-status'));
    expect(dataStatus).toBeTruthy();
  });

  it('should contain data report panel', () => {
    const dataStatus = fixture.debugElement.query(By.css('app-data-report'));
    expect(dataStatus).toBeTruthy();
  });
});
