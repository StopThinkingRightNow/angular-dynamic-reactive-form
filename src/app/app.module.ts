import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {MyFormComponent} from './my.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { FormRenderComponent } from './form/form-render/form-render.component';
import { FormComponent } from './form/form/form.component';
import { SubFormComponent } from './form/sub-form/sub-form.component';
import { SubArrayComponent } from './form/sub-array/sub-array.component';
import { WidgetComponent } from './form/widget/widget.component';
import { OmTextareaComponent } from './form/widget/om-textarea/om-textarea.component';
import { OmInputComponent } from './form/widget/om-input/om-input.component';
import { OmDateComponent } from './form/widget/om-date/om-date.component';
import { OmDropdownComponent } from './form/widget/om-dropdown/om-dropdown.component';

@NgModule({
  declarations: [MyFormComponent, FormRenderComponent, FormComponent, SubFormComponent, SubArrayComponent, WidgetComponent, OmTextareaComponent, OmInputComponent, OmDateComponent, OmDropdownComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [MyFormComponent],
})
export class AppModule {}
