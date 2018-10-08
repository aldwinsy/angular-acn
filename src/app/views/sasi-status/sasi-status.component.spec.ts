import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasiStatusComponent } from './sasi-status.component';

describe('SasiStatusComponent', () => {
  let component: SasiStatusComponent;
  let fixture: ComponentFixture<SasiStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasiStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasiStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
