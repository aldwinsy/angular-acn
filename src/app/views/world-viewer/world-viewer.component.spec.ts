import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldViewerComponent } from './world-viewer.component';

describe('WorldViewerComponent', () => {
  let component: WorldViewerComponent;
  let fixture: ComponentFixture<WorldViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
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

  it('should create router outlet', () => {
    const router = fixture.debugElement.query(By.css('router-outlet'));
    expect(router).toBeTruthy();
  });
});
