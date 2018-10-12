import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDataServerComponent } from './config-data-server.component';

describe('ConfigDataServerComponent', () => {
  let component: ConfigDataServerComponent;
  let fixture: ComponentFixture<ConfigDataServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDataServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDataServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
