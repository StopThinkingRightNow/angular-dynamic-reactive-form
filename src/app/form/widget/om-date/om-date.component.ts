import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'app-om-date',
  templateUrl: './om-date.component.html',
  styleUrls: ['./om-date.component.scss']
})
export class OmDateComponent extends WidgetComponent  implements OnInit {

  constructor() { super()}

  ngOnInit(): void {
  }

}
