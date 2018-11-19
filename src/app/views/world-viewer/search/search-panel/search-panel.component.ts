import { worldViewerLabels, worldGroup, worldObjectProperties } from 'sasi/shared/variables/global-variables';
import { Component, ViewChildren, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: [
    './search-panel.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class SearchPanelComponent implements OnInit {
  readonly worldViewerLabels = worldViewerLabels;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly world = worldGroup;

  @ViewChildren('chipList') chipList;
  @Input() worldSummaryData;
  worldGroup = this.world.paradise;
  selectedQuery: string;
  values = [];
  propertyForm: FormGroup;
  worldQueries = [];
  worldObjectProperties = worldObjectProperties;
  options: string[];
  filteredOptions: string[] = this.options;
  displayedOptions: string[] = this.options;

  disableAddNewProperty = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.worldQueries = this.worldSummaryData.map(data => data.objectName);
    this.selectedQuery = this.worldQueries[0];
    this.initializeForm();
  }

  initializeForm() {
    this.options = this.worldObjectProperties[this.selectedQuery];
    this.filteredOptions = this.options;
    this.displayedOptions = this.options;
    this.propertyForm = this.formBuilder.group({
      propertyNames: this.formBuilder.array([ this.createNewProperty() ])
    });
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.displayedOptions = this.filteredOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  createNewProperty(): FormGroup  {
    return this.formBuilder.group({
      property: new FormControl('', [
        Validators.required,
        this.validateProperty()
      ]),
      values: new FormControl([], [
        Validators.required,
        Validators.minLength(1)
      ]),
    });
  }

  validateProperty() {
    return (propertyName: FormControl) => {
      if (propertyName.dirty && propertyName.value) {
        return(this.options.includes(propertyName.value)) ? null : { invalid: true};
      }
      return null;
    };
  }

  filterProperyTypeAhead() {
    // filter out properties already selected
    const addedProperties = this.propertyForm.value.propertyNames.map(propertyName => propertyName.property);
    this.filteredOptions = this.options.filter(property => !addedProperties.includes(property));
    this.displayedOptions = this.filteredOptions;
  }

  addNewProperty() {
    const control = <FormArray>this.propertyForm.controls['propertyNames'];
    control.push(this.createNewProperty());
    this.filterProperyTypeAhead();
    this.disableAddNewProperty = this.displayedOptions.length <= 1;
  }

  removeProperty(index: number) {
    const control = <FormArray>this.propertyForm.controls['propertyNames'];
    control.removeAt(index);
    this.filterProperyTypeAhead();
    this.disableAddNewProperty = false;
  }

  add(event: MatChipInputEvent, index) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const propertyNamesArray = <FormArray>this.propertyForm.controls['propertyNames'];
      const propertyName = <FormGroup>propertyNamesArray.controls[index];
      propertyName.controls['values'].value.push(value.trim());
      propertyName.controls['values'].setValue(propertyName.controls['values'].value);
      this.chipList._results[index].errorState = false;
    }

    if (input) {
      input.value = '';
    }
  }

  remove(value, index) {
    const propertyNamesArray = <FormArray>this.propertyForm.controls['propertyNames'];
    const propertyName = <FormGroup>propertyNamesArray.controls[index];
    const deleteIndex = propertyName.controls['values'].value.indexOf(value);

    if (index >= 0) {
      propertyName.controls['values'].value.splice(deleteIndex, 1);
      propertyName.controls['values'].setValue(propertyName.controls['values'].value);
      if (propertyName.controls['values'].value.length < 1) {
        this.chipList._results[index].errorState = true;
      }
    }
  }

  search() {
    const parameters = {
      world: this.worldGroup,
      resultsToBeViewed: this.selectedQuery
    };
    const search = _.reduce(this.propertyForm.value.propertyNames, (acc, obj) => {
      return { ...acc, [obj.property]: [obj.values].join() };
    }, parameters);
    this.router.navigate(['world-viewer/search-results', search]);
  }
}
