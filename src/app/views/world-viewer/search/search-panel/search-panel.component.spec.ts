import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { worldSummaryData } from 'sasi-mock/world-summary-mock';
import { By } from '@angular/platform-browser';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [ SearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    component.worldSummaryData = worldSummaryData;
    spyOn(component, 'initializeForm').and.callThrough();
    fixture.detectChanges();
  });

  it('should create world search panel component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on init', () => {
    expect(component.initializeForm).toHaveBeenCalled();
    expect(component.propertyForm).toBeDefined();
  });

  it('should initialize form when property downdown in changed', () => {
    const propertyDropdown = fixture.debugElement.query(By.css('#property-dropdown'));
    propertyDropdown.triggerEventHandler('selectionChange', {});
    expect(component.initializeForm).toHaveBeenCalled();
  });

  it('should filter property typeahead options', () => {
    const propertyTypeahead = fixture.debugElement.query(By.css('#property-name-input'));
    propertyTypeahead.triggerEventHandler('keyup', {target: {value: 'subfleetID'}});
    fixture.detectChanges();
    expect(component.displayedOptions).toContain('subfleetID');
  });

  it('should filter property typeahead options', () => {
    component.propertyForm.valueChanges.subscribe(value => {
      expect(value.propertyNames).toContain(Object({ property: 'subfleetID', values: [] }));
    });
    const propertyTypeahead = fixture.debugElement.query(By.css('#property-autocomplete'));
    propertyTypeahead.triggerEventHandler('optionSelected', {option: {value: 'subfleetID'}});
  });

});
