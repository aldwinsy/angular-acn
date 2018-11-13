import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigModule } from './config.module';
import { SharedModule } from 'sasi/shared/shared.module';
import { PageNotFoundComponent } from 'sasi/core/page-not-found/page-not-found.component';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ConfigModule,
        RouterTestingModule
       ],
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
