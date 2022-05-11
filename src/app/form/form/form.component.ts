import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  fields: any;

  dynamicObject = [
    {
      key: 'name',
      label: 'Name',
      displayType: 'textbox'
    },
    {
      key: 'company',
      label: 'Company',
      displayType: 'textbox'
    },
    {
      key: 'comment',
      label: 'Comment',
      displayType: 'textarea'
    },
    {
      key: 'dropwdown',
      label: 'Select Dropdown',
      displayType: 'dropdown'
    },
    {
      key: 'date',
      label: 'Select Date',
      displayType: 'datepicker'
    },
  ];

  dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group(this.createFromController(this.fields));

    this.dynamicForm.valueChanges.subscribe((values) => {
      console.log('values', values)
    })

  }

  createFromController(fields: any) {
    let dynamicFormContollers: any = {};
    for (var field of fields) {
      if (this.isObject(field)) {
        dynamicFormContollers[field.key] = this.createFormGroup(field.object);
      } else if (this.isArray(field)) { 
        dynamicFormContollers[field.key] = this.createFormArray(field.object);
      } else {
        dynamicFormContollers[field.key] = this.createFormController(field);
      }
    }
    console.log(dynamicFormContollers);
    return dynamicFormContollers;
  }

  createFormController(field: any) {
    return new FormControl('');
  }
  createFormGroup(fields: any) {
   return this.formBuilder.group(this.createFromController(fields));
  }

  createFormArray(fields: any) {
    const arryGroups = fields.map((field: any) => {
      return this.formBuilder.group({ [field.key]: this.createFormController(field)})
    })
    return this.formBuilder.array(arryGroups);
   }

  isObject(field: any): boolean{
    return field.displayType === 'object';
  }

  isArray(field: any): boolean{
    return field.displayType === 'array';
  }
}
