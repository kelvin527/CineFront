import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import {  primeraLetraMayuscula } from '../utilidades/validaciones/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent implements OnInit {

constructor(private router:Router,private formBuilder:FormBuilder){}
form:FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['',{
        validators:[Validators.required,Validators.minLength(4),
          primeraLetraMayuscula()]
      }]
    })
  }

  guardar(){
    this.router.navigate(['/generos']);

  }

  obtenerErrores(){
    var campo = this.form.get('nombre');//esto es pra obtener los campo del formulario
    if (campo.hasError('required')) {//esto comprueba si tiene el de validacion del campo y si lo tiene retorna el mensaje
      return "El Nombre es obligatorio";
  }
    if(campo.hasError('minLength'))
    {return "nohjrtjrj"; }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje
    }
  return '';
}
}
