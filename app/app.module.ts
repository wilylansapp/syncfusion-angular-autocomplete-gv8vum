import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { HttpModule } from '@angular/http';

import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [
    AutoCompleteModule,
    BrowserModule,
    CheckBoxModule,
    DropDownListModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [FormGroupDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
