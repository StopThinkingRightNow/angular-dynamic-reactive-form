import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'app-om-textarea',
  templateUrl: './om-textarea.component.html',
  styleUrls: ['./om-textarea.component.scss']
})
export class OmTextareaComponent extends WidgetComponent implements OnInit {

  constructor() {super()}

  ngOnInit(): void {
  }

}
