import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/about/components/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/weather/components/forecast/forecast.component';
import { TempWeatherComponent } from './pages/weather/components/forecast/temp-weather/temp-weather.component';
import { CountriesComponent } from './pages/weather/components/form/countries/countries.component';
import { FormComponent } from './pages/weather/components/form/form.component';
import { StatesComponent } from './pages/weather/components/form/states/states.component';
import { InfoModalComponent } from './pages/weather/components/info-modal/info-modal.component';
import { SectionForecastComponent } from './pages/weather/components/info-modal/section-forecast/section-forecast.component';
import { SectionFormComponent } from './pages/weather/components/info-modal/section-form/section-form.component';
import { SectionInfoComponent } from './pages/weather/components/info-modal/section-info/section-info.component';
import { SectionSeasonComponent } from './pages/weather/components/info-modal/section-season/section-season.component';
import { WeatherComponent } from './pages/weather/weather.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AboutComponent,
    AppComponent,
    CountriesComponent,
    ForecastComponent,
    FormComponent,
    GameComponent,
    HomeComponent,
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
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
