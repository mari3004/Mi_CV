import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './app/data/data.component';
import { DevComponent } from './app/dev/dev.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { RrhhComponent } from './app/rrhh/rrhh.component';
import { EducationComponent } from './app/education/education.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { PersonalComponent } from './app/personal/personal.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'rrhh', component: RrhhComponent },
  { path: 'dev', component: DevComponent },
  { path: 'data', component: DataComponent},
  { path: 'information', component: PersonalComponent},
  { path: 'education', component: EducationComponent},
  { path: 'experience', component:ExperienceComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
