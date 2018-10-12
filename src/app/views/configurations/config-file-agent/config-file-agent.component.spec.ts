import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFileAgentComponent } from './config-file-agent.component';

describe('ConfigFileAgentComponent', () => {
  let component: ConfigFileAgentComponent;
  let fixture: ComponentFixture<ConfigFileAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFileAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFileAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
