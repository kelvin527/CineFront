import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPelicuasComponent } from './peliculas/listado-pelicuas/listado-pelicuas.component';
import { MaterialModule } from './material/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { LsiatdoGenericoComponent } from './utilidades/lsiatdo-generico/lsiatdo-generico.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPelicuasComponent,
    MenuComponent,
    LsiatdoGenericoComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
