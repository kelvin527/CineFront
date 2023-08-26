import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { generoCreacionDto } from '../interfaces/genero.interface';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private router: Router) { }

  modelo:generoCreacionDto={
    nombre:'drama'
  }


  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      console.log(params.id)
    })
  }

  guardar(genero:generoCreacionDto){
    console.log(genero)
    this.router.navigate(['/generos']);

  }
}
