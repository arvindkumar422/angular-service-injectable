import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Group2Component } from './group2/group2.component';
import { Group1Component } from './group1/group1.component';
import { Group1_2Component } from './group1_2/group1_2.component';
import { Group2_2Component } from './group2_2/group2_2.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Group2Component, Group1Component, Group1_2Component, Group2_2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
