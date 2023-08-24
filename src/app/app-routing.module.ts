import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { GenerosComponent } from './generos/generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'generos', component:GenerosComponent},
  {path:'/generos/crear', component:CrearGenerosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
