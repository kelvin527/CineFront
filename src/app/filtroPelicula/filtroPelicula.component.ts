import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtroPelicula',
  templateUrl: './filtroPelicula.component.html',
  styleUrls: ['./filtroPelicula.component.css']
})
export class FiltroPeliculaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup;

  generos=[{
    id:1, nombre:'Drama'
  },
  {
    id:2, nombre:'Accion'
  },
  {
    id:3, nombre:'Amor'
  }
]

peliculas=[
  {titulo:'Iromam', enCines:false, proximosEstrenos:true,generos:[1,2],poster:'assets/descarga.jpeg'},
  {titulo:'fredy', enCines:true, proximosEstrenos:false,generos:[1,2],poster:'assets/descarga.jpeg'},
  {titulo:'cjikd', enCines:false, proximosEstrenos:true,generos:[1,2],poster:'assets/descarga.jpeg'}
]


limpiar(){

}
  ngOnInit() {

    this.form = this.formBuilder.group({
      titulo: '',
      generoId:0,
      proximosExtrenos:false,
      enCines:false

    })

  }

}
