import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurgatoryParadiseComponent } from 'sasi/views/sasi-status/data-status/purgatory-paradise/purgatory-paradise.component';

describe('PurgatoryParadiseComponent', () => {
  let component: PurgatoryParadiseComponent;
  let fixture: ComponentFixture<PurgatoryParadiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurgatoryParadiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurgatoryParadiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
