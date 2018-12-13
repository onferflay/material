import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { VanoComponent } from './vano/vano.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';


@NgModule({
  declarations: [
    AppComponent,
    VanoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
