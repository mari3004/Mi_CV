import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { RrhhComponent } from './app/rrhh/rrhh.component';
import { DevComponent } from './app/dev/dev.component';
import { DataComponent } from './app/data/data.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { FooterComponent } from './app/footer/footer.component';
import { CarruselComponent } from './app/inicio/carrusel/carrusel.component';
import { CardsComponent } from './app/inicio/cards/cards.component';
import { PersonalComponent } from './app/personal/personal.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { EducationComponent } from './app/education/education.component';
import { ExpRrhhComponent } from './app/experience/exp-rrhh/exp-rrhh.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RrhhComponent,
    DevComponent,
    DataComponent,
    InicioComponent,
    FooterComponent,
    CarruselComponent,
    CardsComponent,
    PersonalComponent,
    ExperienceComponent,
    EducationComponent,
    ExpRrhhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
