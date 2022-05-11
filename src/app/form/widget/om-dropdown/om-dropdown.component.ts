import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'app-om-dropdown',
  templateUrl: './om-dropdown.component.html',
  styleUrls: ['./om-dropdown.component.scss']
})
export class OmDropdownComponent extends WidgetComponent  implements OnInit {

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  
  constructor() { super()}

  ngOnInit(): void {
  }

}
