import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDto } from './crearPelicula.interface';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  guardarCambios(evento:PeliculaCreacionDto){
    console.log(evento)
  }
}
