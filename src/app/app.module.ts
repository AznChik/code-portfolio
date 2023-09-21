import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastComponent } from './weather/components/forecast/forecast.component';
import { TempWeatherComponent } from './weather/components/forecast/temp-weather/temp-weather.component';
import { CountriesComponent } from './weather/components/form/countries/countries.component';
import { FormComponent } from './weather/components/form/form.component';
import { StatesComponent } from './weather/components/form/states/states.component';
import { InfoModalComponent } from './weather/components/info-modal/info-modal.component';
import { SectionForecastComponent } from './weather/components/info-modal/section-forecast/section-forecast.component';
import { SectionFormComponent } from './weather/components/info-modal/section-form/section-form.component';
import { SectionInfoComponent } from './weather/components/info-modal/section-info/section-info.component';
import { SectionSeasonComponent } from './weather/components/info-modal/section-season/section-season.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  bootstrap: [ AppComponent ],
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
    TempWeatherComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
