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
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroPeliculaComponent } from './filtroPelicula/filtroPelicula.component';
import { EditarActorComponent } from './peliculas/actores/editar-actor/editar-actor.component';
import { EdiatrPeliculaComponent } from './peliculas/ediatr-pelicula/ediatr-pelicula.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'generos', component:GenerosComponent},
  {path:'generos/crear', component:CrearGenerosComponent},
  {path:'generos/editar/:id', component:EditarGeneroComponent},

  {path:'actores', component:ActoresComponent},
  {path:'actores/crear', component:CrearActorComponent},
  {path:'actores/editar/:id', component:EditarActorComponent},

  {path:'cines/crear', component:CrearCinesComponent},
  {path:'cines', component:CinesComponent},
  {path:'cines/editar/:id', component:EditarCinesComponent},

  {path:'peliculas/crear', component:CrearPeliculaComponent},
  {path:'peliculas/buscar', component:FiltroPeliculaComponent},
  {path:'peliculas/editar/:id', component:EdiatrPeliculaComponent},

  {path:'**',redirectTo:''} /*esto se llama willcard, y sirve para atrapar
 todos los errores que el usuario haga en la ruta del navegador */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
