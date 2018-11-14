import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRestartAgentComponent } from './config-restart-agent.component';
import { SharedModule } from 'sasi/shared/shared.module';

describe('ConfigRestartAgentComponent', () => {
  let component: ConfigRestartAgentComponent;
  let fixture: ComponentFixture<ConfigRestartAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ ConfigRestartAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRestartAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
