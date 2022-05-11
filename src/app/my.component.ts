import {Component} from '@angular/core';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'app-my-component',
  templateUrl: 'my.component.html',
  styleUrls: ['my.component.css'],
})
export class MyFormComponent {
  myJson = [
    {
      key: 'fieldName',
      label: 'Field Name',
      displayType: 'textbox',
      isRequired: false,
      dataType: 'String',
      section: 'section4',
    },
    {
      key: 'root',
      label: 'Root',
      displayType: 'dropdown',
      isRequired: false,
      dataType: 'String',
      section: 'section4',
    },
    {
      key: 'mode',
      label: 'Mode',
      displayType: 'textbox',
      isRequired: true,
      dataType: 'String',
      section: 'section1',
    },
    {
      key: 'actionName',
      label: 'Action Name',
      displayType: 'textarea',
      isRequired: true,
      dataType: 'String',
      section: 'section1',
    },
    {
      key: 'type',
      label: 'Type',
      displayType: 'dropdown',
      isRequired: true,
      dataType: 'String',
      section: 'section1',
    },
    {
      key: 'outputObject',
      label: 'ActionInterfaceInput',
      displayType: 'object',
      isRequired: true,
      dataType: 'ActionInterfaceInput',
      section: 'section2',
      object: [
        {
          key: 'objectMeta',
          label: 'Object Meta Name',
          displayType: 'datepicker',
          isRequired: true,
          dataType: 'String',
          section: 'section2',
        },
        {
          key: 'isArray',
          label: 'isArray',
          displayType: 'textbox',
          isRequired: true,
          dataType: 'String',
          section: 'section2',
        },
      ],
    },
    {
      key: 'inputObject',
      label: 'ActionInterfaceInput',
      displayType: 'array',
      isRequired: true,
      dataType: 'ActionInterfaceInput',
      section: 'section3',
      object: [
        {
          key: 'objectMeta',
          label: 'Object Meta Name',
          displayType: 'textbox',
          isRequired: true,
          dataType: 'String',
        },
        {
          key: 'isArray',
          label: 'isArray',
          displayType: 'textarea',
          isRequired: true,
          dataType: 'String',
        },
      ],
    },
  ];
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */