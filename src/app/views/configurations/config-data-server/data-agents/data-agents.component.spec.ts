import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAgentsComponent } from './data-agents.component';

describe('DataAgentsComponent', () => {
  let component: DataAgentsComponent;
  let fixture: ComponentFixture<DataAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
