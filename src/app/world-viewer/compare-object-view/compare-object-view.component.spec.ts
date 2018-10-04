import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareObjectViewComponent } from './compare-object-view.component';

describe('CompareObjectViewComponent', () => {
  let component: CompareObjectViewComponent;
  let fixture: ComponentFixture<CompareObjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareObjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareObjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
