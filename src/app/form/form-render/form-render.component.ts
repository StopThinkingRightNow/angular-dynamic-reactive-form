import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {

  @Input()
  field: any;

  @Input()
  fieldController: FormControl;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.field);
  }

}
