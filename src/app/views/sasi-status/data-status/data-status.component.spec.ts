import { PublishedComponent } from 'sasi/views/sasi-status/data-status/published/published.component';
import { PurgatoryParadiseComponent } from 'sasi/views/sasi-status/data-status/purgatory-paradise/purgatory-paradise.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'sasi/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]',
})
export class RouterLinkStubDirective {
  @Input('routerLink') routerLink: any;
  navigatedTo: any = null;
  @HostListener('click') onClick() {
    this.navigatedTo = this.routerLink;
  }
}

describe('DataStatusComponent', () => {
  let component: DataStatusComponent;
  let fixture: ComponentFixture<DataStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([
            { path: '', component: DataStatusComponent },
            { path: 'sasi-status/purgatory-paradise', component: PurgatoryParadiseComponent },
            { path: 'sasi-status/published', component: PublishedComponent }
        ])
      ],
      declarations: [
        DataStatusComponent,
        PurgatoryParadiseComponent,
        PublishedComponent,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create data status component', () => {
    expect(component).toBeTruthy();
  });

  it('should display purgatory card', () => {
    const purgatoryCard = fixture.debugElement.query(By.css('#purgatory-card'));
    expect(purgatoryCard).toBeTruthy();
  });

  it('should display paradise card', () => {
    const paradiseCard = fixture.debugElement.query(By.css('#paradise-card'));
    expect(paradiseCard).toBeTruthy();
  });

  it('should display published card', () => {
    const publishedCard = fixture.debugElement.query(By.css('#published-card'));
    expect(publishedCard).toBeTruthy();
  });

  it('should define RouterLinks from template', () => {
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    expect(routerLinks.length).toBe(3, 'should have 3 routerLinks');
    expect(routerLinks[0].routerLink).toBe('/sasi-status/purgatory-paradise');
    expect(routerLinks[1].routerLink).toBe('/sasi-status/purgatory-paradise');
    expect(routerLinks[2].routerLink).toBe('/sasi-status/published');
  });

  it('should click links in template and naviigate', () => {
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    const sasiStatusLinkDe = linkDes[1];   // DebugElement
    const sasiStatusLink = routerLinks[1]; // Directive

    expect(sasiStatusLink.navigatedTo).toBeNull('should not have navigated yet');

    sasiStatusLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(sasiStatusLink.navigatedTo).toBe('/sasi-status/purgatory-paradise');
  });
});
