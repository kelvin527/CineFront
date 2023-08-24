import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { GenerosComponent } from './generos/generos.component';
import { CrearGenerosComponent } from './crear-generos/crear-generos.component';
import { ActoresComponent } from './peliculas/actores/actores.component';
import { CrearActorComponent } from './peliculas/actores/crear-actor/crear-actor.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { CinesComponent } from './cines/cines.component';
import { CrearPeliculaComponent } from './crear-pelicula/crear-pelicula.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'generos', component:GenerosComponent},
  {path:'generos/crear', component:CrearGenerosComponent},

  {path:'actores', component:ActoresComponent},
  {path:'peliculas/crear', component:CrearActorComponent},

  {path:'cines/crear', component:CrearCinesComponent},
  {path:'cines', component:CinesComponent},

  {path:'peliculas/crear', component:CrearPeliculaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
