import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import {  primeraLetraMayuscula } from '../utilidades/validaciones/primeraLetraMayuscula';
import { generoCreacionDto } from '../generos/interfaces/genero.interface';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent  {

constructor(private router:Router){}

guardar(genero:generoCreacionDto){
  console.log(genero)
  this.router.navigate(['/generos']);

}
}
