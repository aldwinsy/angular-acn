import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from 'sasi/core/header/navigation/navigation.component';
import { MaterialsModule } from 'sasi/shared/materials/materials.module';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialsModule
      ],
      declarations: [
        HeaderComponent,
        NavigationComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation component', () => {
    const nav = fixture.debugElement.query(By.css('app-nav'));
    expect(nav).toBeTruthy();
  });

  it('should contain the user icon', () => {
    const userIcon = fixture.debugElement.query(By.css('#user-img'));
    expect(userIcon).toBeTruthy();
  });
});
