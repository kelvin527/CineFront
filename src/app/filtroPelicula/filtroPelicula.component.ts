import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtroPelicula',
  templateUrl: './filtroPelicula.component.html',
  styleUrls: ['./filtroPelicula.component.css']
})
export class FiltroPeliculaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private loaction:Location/*Location sirve para poder agregar
  valores a la URL*/ , private activeRoute: ActivatedRoute/*ActivatedRoute sirve para leer los valores
  de una URL o queyStrings*/ ) { }

  form:FormGroup;

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Acción' },
    { id: 3, nombre: 'Comedia' }
  ];

  peliculas = [
    {titulo: 'Spider-Man: Far From Home', enCines: false, proximosEstrenos: true, generos: [1,2], poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo: 'Moana', enCines: true, proximosEstrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo: 'Inception', enCines: false, proximosEstrenos: false, generos: [1,3], poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  ]

  peliculasOriginal = this.peliculas;
/*peliculaOriginal es para guardar una
copia y asi tener facilidad en el borrado de la data sin afectar el arreglo
original*/

formularioOriginal={
  titulo: '',
  generoId:0,
  proximosExtrenos:false,
  enCines:false

}
  ngOnInit() {

    this.form = this.formBuilder.group(this.formularioOriginal)

    this.form.valueChanges/*esto sirve para obtener
    los valores de un formulario en tiempo real y poder reaccionar con otra
    accion si asi lo queremos*/
      .subscribe(valores =>{
        this.peliculas = this.peliculasOriginal
        this.buscarPeliculas(valores)
        this.escribirParametrosBusquedaEnUrl();
      })


  }

  private leerValoresUrl


  private escribirParametrosBusquedaEnUrl(){
    var queryString = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`)
    }

    if(valoresFormulario.generoId !==0 ){
      queryString.push(`generoId=${valoresFormulario.generoId}`)
    }

    if(valoresFormulario.proximosExtrenos){
      queryString.push(`titulo=${valoresFormulario.proximosExtrenos}`)
    }

    if(valoresFormulario.enCines){
      queryString.push(`titulo=${valoresFormulario.enCines}`)
    }

    this.loaction.replaceState('peliculas/buscar', queryString.join('&'));
  }
  //metodo que filtrara las peliculas por cada valor del formulario
  buscarPeliculas(valores: any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar(){
    /*patchValue sirve para actuliazar un formulario */
    this.form.patchValue(this.formularioOriginal);
  }
}
