import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input"
import {  MatAutocompleteModule } from "@angular/material/autocomplete"
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { StartegyComponent } from './startegy/startegy.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MainComponent,
    StartegyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
