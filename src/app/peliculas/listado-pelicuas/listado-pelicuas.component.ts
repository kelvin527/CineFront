import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pelicuas',
  templateUrl: './listado-pelicuas.component.html',
  styleUrls: ['./listado-pelicuas.component.css']
})
export class ListadoPelicuasComponent implements OnInit {

  constructor() { }
  @Input()
 peliculas:any;
  ngOnInit(): void {

  }

}
