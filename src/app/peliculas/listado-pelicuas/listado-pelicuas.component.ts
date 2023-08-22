import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pelicuas',
  templateUrl: './listado-pelicuas.component.html',
  styleUrls: ['./listado-pelicuas.component.css']
})
export class ListadoPelicuasComponent {

  constructor() { }
  @Input()
 peliculas:any;

 remover(pelindes:number):void{
  this.peliculas.splice(pelindes,1)
 }


}
