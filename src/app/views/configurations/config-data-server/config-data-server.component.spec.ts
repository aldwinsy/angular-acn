import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDataServerComponent } from './config-data-server.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { ConfigService } from 'sasi/views/configurations/config.service';
import { of } from 'rxjs';
import { dataServerConfigProperties, dataServerAgents } from 'sasi/shared/mock/config-data.mock';

describe('ConfigDataServerComponent', () => {
  let component: ConfigDataServerComponent;
  let fixture: ComponentFixture<ConfigDataServerComponent>;

  const configServiceSpy = jasmine.createSpyObj('ConfigService', ['getDataServerConfigProperties', 'getDataServerAgents']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ ConfigDataServerComponent ],
      providers: [
        { provide: ConfigService, useValue: configServiceSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDataServerComponent);
    component = fixture.componentInstance;
    configServiceSpy.getDataServerConfigProperties.and.returnValue(of(dataServerConfigProperties));
    configServiceSpy.getDataServerAgents.and.returnValue(of(dataServerAgents));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data server config properties on init', () => {
    expect(configServiceSpy.getDataServerConfigProperties).toHaveBeenCalled();
    expect(component.dataServerProperties).toEqual(dataServerConfigProperties);
  });

  it('should get data server agents on init', () => {
    expect(configServiceSpy.getDataServerAgents).toHaveBeenCalled();
    expect(component.dataAgents).toEqual(dataServerAgents);
  });

});
