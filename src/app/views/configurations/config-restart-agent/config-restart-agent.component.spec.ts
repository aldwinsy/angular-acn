import { ConfigService } from 'sasi/views/configurations/config.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRestartAgentComponent } from './config-restart-agent.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { of } from 'rxjs';
import { restartAgentPorperties } from 'sasi/shared/mock/config-data.mock';

describe('ConfigRestartAgentComponent', () => {
  let component: ConfigRestartAgentComponent;
  let fixture: ComponentFixture<ConfigRestartAgentComponent>;

  const configServiceSpy = jasmine.createSpyObj('ConfigService', ['getRestartAgent']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ ConfigRestartAgentComponent ],
      providers: [ {provide: ConfigService, useValue: configServiceSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRestartAgentComponent);
    component = fixture.componentInstance;
    configServiceSpy.getRestartAgent.and.returnValue(of(restartAgentPorperties));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get restart agent properties on inti', () => {
    expect(configServiceSpy.getRestartAgent).toHaveBeenCalled();
    expect(component.restartAgentConfig).toEqual(restartAgentPorperties.restartAgentConfig);
    expect(component.restartAgentStatus).toEqual(restartAgentPorperties.restartAgentStatus);
  });
});
