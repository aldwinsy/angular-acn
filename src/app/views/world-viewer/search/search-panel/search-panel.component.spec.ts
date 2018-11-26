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

  it('should set property and property values', () => {
    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
    trigger.click(); // opens objectNames dropdown
    fixture.detectChanges();
    const object = fixture.debugElement.queryAll(By.css('mat-option'))[1].nativeElement;
    object.click();
    fixture.detectChanges();
    expect(component.selectedQuery).toBe('airport');
    expect(component.initializeForm).toHaveBeenCalledTimes(2);
    const propertyTypeahead = fixture.debugElement.query(By.css('#property-autocomplete'));
    propertyTypeahead.triggerEventHandler('optionSelected', {option: {value: 'airportID'}});
    fixture.detectChanges();
    component.propertyForm.valueChanges.subscribe(value => {
      expect(value.propertyNames).toContain(Object({ property: 'airportID', values: ['MNL'] }));
    });
    const propertyValue = fixture.debugElement.query(By.css('#property-value-input'));
    propertyValue.triggerEventHandler('matChipInputTokenEnd', { input: { value: 'MNL' }, value: 'MNL' });
  });

  it('should remove values from property', () => {
    const propertyTypeahead = fixture.debugElement.query(By.css('#property-autocomplete'));
    propertyTypeahead.triggerEventHandler('optionSelected', { option: { value: 'aircraftID' } });
    fixture.detectChanges();
    const propertyValue = fixture.debugElement.query(By.css('#property-value-input'));
    propertyValue.triggerEventHandler('matChipInputTokenEnd', { input: { value: 'A123' }, value: 'A123' });
    fixture.detectChanges();
    const removeValueIcon = fixture.debugElement.query(By.css('.mat-chip-remove')).nativeElement;
    component.propertyForm.valueChanges.subscribe(value => {
      expect(value.propertyNames).toContain(Object({ property: 'aircraftID', values: [] }));
    });
    removeValueIcon.click();
  });

  it('should enable add new property button when previous property form is valid', () => {
    const addNewPropBtn = fixture.debugElement.query(By.css('#add-another-button'));
    expect(addNewPropBtn.nativeElement.disabled).toBeTruthy();
    const propertyTypeahead = fixture.debugElement.query(By.css('#property-autocomplete'));
    propertyTypeahead.triggerEventHandler('optionSelected', { option: { value: 'aircraftID' } });
    fixture.detectChanges();
    const propertyValue = fixture.debugElement.query(By.css('#property-value-input'));
    propertyValue.triggerEventHandler('matChipInputTokenEnd', { input: { value: 'A123' }, value: 'A123' });
    fixture.detectChanges();
    expect(addNewPropBtn.nativeElement.disabled).toBeFalsy();
  });

  it('should add new property form when add new property button is clicked', () => {
    const addNewPropBtn = fixture.debugElement.query(By.css('#add-another-button')).nativeElement;
    const propertyTypeahead = fixture.debugElement.query(By.css('#property-autocomplete'));
    propertyTypeahead.triggerEventHandler('optionSelected', { option: { value: 'aircraftID' } });
    fixture.detectChanges();
    const propertyValue = fixture.debugElement.query(By.css('#property-value-input'));
    propertyValue.triggerEventHandler('matChipInputTokenEnd', { input: { value: 'A123' }, value: 'A123' });
    fixture.detectChanges();
    spyOn(component, 'addNewProperty').and.callThrough();
    addNewPropBtn.click();
    expect(component.addNewProperty).toHaveBeenCalled();
  });

  it('should remove property form when remove button is clicked', () => {
    spyOn(component, 'removeProperty').and.callThrough();
    const deleteIcon = fixture.debugElement.query(By.css('#delete-property-icon')).nativeElement;
    deleteIcon.click();
    expect(component.removeProperty).toHaveBeenCalled();
    expect(component.propertyForm.value.propertyNames).toEqual([]);
  });

  it('should enable search when form is valid', () => {
    const searchBtn = fixture.debugElement.query(By.css('#world-search-button')).nativeElement;
    expect(searchBtn.disabled).toBeTruthy();
    const propertyTypeahead = fixture.debugElement.query(By.css('#property-autocomplete'));
    propertyTypeahead.triggerEventHandler('optionSelected', { option: { value: 'aircraftID' } });
    fixture.detectChanges();
    const propertyValue = fixture.debugElement.query(By.css('#property-value-input'));
    propertyValue.triggerEventHandler('matChipInputTokenEnd', { input: { value: 'A123' }, value: 'A123' });
    fixture.detectChanges();
    expect(searchBtn.disabled).toBeFalsy();
  });

});
