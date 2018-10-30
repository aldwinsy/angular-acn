import { By } from '@angular/platform-browser';
import { CoreModule } from 'sasi/core/core.module';
import { CoreRoutingModule } from 'sasi/core/core-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { mockHeaderNavItems } from 'sasi-mock/nav-items.mock';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        CoreModule,
        CoreRoutingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    router.navigate(['/'])
    .then(() => {
      expect(router.url).toEqual('/sasi-status');
    });
  });

  it('should navigate to sasi status', async(() => {
    router.navigate(['/sasi-status'])
    .then(() => {
      expect(router.url).toEqual('/sasi-status');
    });
  }));

  it('should navigate to world viewer', async(() => {
    router.navigate(['/world-viewer'])
    .then(() => {
      expect(router.url).toEqual('/world-viewer');
    });
  }));

  it('should navigate to dps', async(() => {
    router.navigate(['/dps'])
    .then(() => {
      expect(router.url).toEqual('/dps');
    });
  }));

  it('should navigate to config', async(() => {
    router.navigate(['/config'])
    .then(() => {
      expect(router.url).toEqual('/config/data-server');
    });
  }));

  it('should navigate to documentation', async(() => {
    router.navigate(['/documentation'])
    .then(() => {
      expect(router.url).toEqual('/documentation');
    });
  }));

  it('should contain the nav items', () => {
    const navItems = fixture.debugElement.queryAll(By.css('#nav-item'));
    navItems.forEach((navItem, index) => {
      expect(navItem.nativeElement.textContent).toContain(mockHeaderNavItems[index].label);
    });
  });

});
