import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasiMatTableComponent } from './sasi-mat-table.component';

describe('SasiMatTableComponent', () => {
  let component: SasiMatTableComponent;
  let fixture: ComponentFixture<SasiMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasiMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasiMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
