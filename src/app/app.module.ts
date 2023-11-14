import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common'
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { MainComponent } from './views/main/main.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { MaxMinComponent } from './components/max-min/max-min.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    InputComponent,
    MainComponent,
    WeatherCardComponent,
    MaxMinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
