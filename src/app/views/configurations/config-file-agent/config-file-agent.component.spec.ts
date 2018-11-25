import { ConfigService } from 'sasi/views/configurations/config.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFileAgentComponent } from './config-file-agent.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { of } from 'rxjs';
import { fileAgent } from 'sasi/shared/mock/config-data.mock';

describe('ConfigFileAgentComponent', () => {
  let component: ConfigFileAgentComponent;
  let fixture: ComponentFixture<ConfigFileAgentComponent>;

  const configServiceSpy = jasmine.createSpyObj('ConfigService', ['getFileAgent']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ ConfigFileAgentComponent ],
      providers: [
        { provide: ConfigService, useValue: configServiceSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFileAgentComponent);
    component = fixture.componentInstance;
    configServiceSpy.getFileAgent.and.returnValue(of(fileAgent));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get file agent properties on init', () => {
    expect(configServiceSpy.getFileAgent).toHaveBeenCalled();
    expect(component.fileAgentParameters).toEqual(fileAgent);
  });
});
