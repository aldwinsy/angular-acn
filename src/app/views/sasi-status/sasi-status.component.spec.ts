import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SasiStatusModule } from 'sasi/views/sasi-status/sasi-status.module';
import { SasiStatusComponent } from './sasi-status.component';
import { SharedModule } from 'sasi/shared/shared.module';

import { By } from '@angular/platform-browser';


describe('SasiStatusComponent', () => {
  let component: SasiStatusComponent;
  let fixture: ComponentFixture<SasiStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        SasiStatusModule,
        RouterTestingModule
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

  it('should contain router outlet', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy();
  });

  it('should contain data report panel', () => {
    const dataStatus = fixture.debugElement.query(By.css('app-data-report'));
    expect(dataStatus).toBeTruthy();
  });
});
