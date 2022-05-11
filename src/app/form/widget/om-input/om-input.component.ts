import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'app-om-input',
  templateUrl: './om-input.component.html',
  styleUrls: ['./om-input.component.scss']
})
export class OmInputComponent extends WidgetComponent  implements OnInit {

  constructor() { super()}

  ngOnInit(): void {
  }

}
