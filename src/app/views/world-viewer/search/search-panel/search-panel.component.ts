import { Component, ViewChildren, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: [
    './search-panel.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class SearchPanelComponent implements OnInit {

  @ViewChildren('chipList') chipList;
  selected = 'option1';
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  values = [];
  propertyForm: FormGroup;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  filteredOptions = this.options;

  constructor(private formBuilder: FormBuilder) {
    this.propertyForm = this.formBuilder.group({
      propertyNames: this.formBuilder.array([ this.createNewProperty() ])
    });
  }

  ngOnInit() {
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(filterValue));
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

  addNewProperty() {
    const control = <FormArray>this.propertyForm.controls['propertyNames'];
    control.push(this.createNewProperty());
  }

  removeProperty(index: number) {
    const control = <FormArray>this.propertyForm.controls['propertyNames'];
    control.removeAt(index);
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

    console.log(this.propertyForm);
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
    console.log(this.propertyForm);
  }

}
