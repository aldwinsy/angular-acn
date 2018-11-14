import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecordsFoundComponent } from './no-records-found.component';
import { SharedModule } from 'sasi/shared/shared.module';

describe('NoRecordsFoundComponent', () => {
  let component: NoRecordsFoundComponent;
  let fixture: ComponentFixture<NoRecordsFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecordsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
