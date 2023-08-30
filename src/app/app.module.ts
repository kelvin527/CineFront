import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPelicuasComponent } from './peliculas/listado-pelicuas/listado-pelicuas.component';
import { MaterialModule } from './material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { LsiatdoGenericoComponent } from './listado-generico/listatdo-generico.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { GenerosComponent } from './generos/generos.component';
import { CrearGenerosComponent } from './crear-generos/crear-generos.component';
import { CinesComponent } from './cines/cines.component';
import { FormularioGenerosComponent } from './generos/formulario-generos/formulario-generos.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroPeliculaComponent } from './filtroPelicula/filtroPelicula.component';
import { CrearActorComponent } from './peliculas/actores/crear-actor/crear-actor.component';
import { FarmularioActoresComponent } from './peliculas/actores/farmulario-actores/farmulario-actores.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPelicuasComponent,
    MenuComponent,
    LsiatdoGenericoComponent,
    RatingComponent,
      LandingPageComponent,
      GenerosComponent,
      CrearGenerosComponent,
      CinesComponent,
      FormularioGenerosComponent,
    EditarGeneroComponent,
    EditarCinesComponent,
    FiltroPeliculaComponent,
    CrearActorComponent,
    FarmularioActoresComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
