import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDto, PeliculaDto } from 'src/app/crear-pelicula/crearPelicula.interface';

@Component({
  selector: 'app-ediatr-pelicula',
  templateUrl: './ediatr-pelicula.component.html',
  styleUrls: ['./ediatr-pelicula.component.css']
})
export class EdiatrPeliculaComponent implements OnInit {

  constructor() { }

  modelo:PeliculaDto={titulo:'skn',resumen:'fbnkfbdnn',enCines:true,trailer:'kngknnnn',poster:'kfdklgkdfgkd',fechaLanzamiento:new Date()}
  ngOnInit() {
  }

  guardarCambios(event:PeliculaCreacionDto){
    console.log(event);
  }
}
