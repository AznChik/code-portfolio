import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForecastComponent } from './components/forecast/forecast.component';
import { CountriesComponent } from './components/form/countries/countries.component';
import { FormComponent } from './components/form/form.component';
import { StatesComponent } from './components/form/states/states.component';
import { TempWeatherComponent } from './components/forecast/temp-weather/temp-weather.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { SectionInfoComponent } from './components/info-modal/section-info/section-info.component';
import { SectionFormComponent } from './components/info-modal/section-form/section-form.component';
import { SectionForecastComponent } from './components/info-modal/section-forecast/section-forecast.component';
import { SectionSeasonComponent } from './components/info-modal/section-season/section-season.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    ForecastComponent,
    FormComponent,
    InfoModalComponent,
    SectionForecastComponent,
    SectionFormComponent,
    SectionInfoComponent,
    SectionSeasonComponent,
    StatesComponent,
    TempWeatherComponent
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
