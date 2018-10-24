import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldViewerComponent } from './world-viewer.component';

describe('WorldViewerComponent', () => {
  let component: WorldViewerComponent;
  let fixture: ComponentFixture<WorldViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
