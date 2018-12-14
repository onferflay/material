import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from 'jquery';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { VanoComponent } from './vano/vano.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MaterialComponent } from './material/material.component';


@NgModule({
  declarations: [
    AppComponent,
    VanoComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
