import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validaciones/primeraLetraMayuscula';
import { generoCreacionDto } from '../interfaces/genero.interface';

@Component({
  selector: 'app-formulario-generos',
  templateUrl: './formulario-generos.component.html',
  styleUrls: ['./formulario-generos.component.css']
})
export class FormularioGenerosComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup;
  @Input()
  modelo:generoCreacionDto;

  @Output()
  Onsubmit:EventEmitter<generoCreacionDto> = new EventEmitter<generoCreacionDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['',{
        validators:[Validators.required,Validators.minLength(4),
          primeraLetraMayuscula()]
      }]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);/* patchValue sirve para machear propieddes,
      aqui estamos poniendo el valor que tiene generoCreacionDto en la propuedad nombre. (video 51:8:30)*/
    }
  }

  guardar(){
    this.Onsubmit.emit(this.form.value);
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
