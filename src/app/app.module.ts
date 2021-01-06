import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AccordionModule} from 'primeng/accordion'; 
import {ButtonModule} from 'primeng/button'; 
import {InputTextModule} from 'primeng/inputtext';
import { AddCarComponent } from './car/add-car/add-car.component';  
import { ReactiveFormsModule } from '@angular/forms';
import { CarListComponent } from './car/car-list/car-list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
