import { Component, OnInit } from '@angular/core';
import { cinesCreacionDto } from '../interface/cines.interface';

@Component({
  selector: 'app-crear-cines',
  templateUrl: './crear-cines.component.html',
  styleUrls: ['./crear-cines.component.css']
})
export class CrearCinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  guardarCambio(cine:cinesCreacionDto){
    console.log(cine)
  }
}
