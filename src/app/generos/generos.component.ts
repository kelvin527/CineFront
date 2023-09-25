import { Component, OnInit } from '@angular/core';
import { GeneroService } from './genero.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  constructor(private generoS:GeneroService) { }

  ngOnInit() {
   this.generoS.obtenerTodo()
    .subscribe(genero =>{
      console.log(genero);
    }, error => console.log(error))

  }

}
