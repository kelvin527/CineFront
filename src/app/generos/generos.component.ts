import { Component, OnInit } from '@angular/core';
import { GeneroService } from './genero.service';
import { generoDto } from './interfaces/genero.interface';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  constructor(private generoS:GeneroService) { }
  generos:generoDto[];


  columnasAMostrar =['id','nombre','accioness']
  ngOnInit() {
   this.generoS.obtenerTodo()
    .subscribe(genero =>{
     this.generos = genero
     console.log(genero);
    }, error => console.log())

  }

}
