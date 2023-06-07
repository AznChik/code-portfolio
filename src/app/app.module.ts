import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesComponent } from './components/form/countries/countries.component';
import { FormComponent } from './components/form/form.component';
import { StatesComponent } from './components/form/states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    FormComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
