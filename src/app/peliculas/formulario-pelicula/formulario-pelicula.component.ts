import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDto } from 'src/app/crear-pelicula/crearPelicula.interface';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup

  @Output()
  OnSubmit:EventEmitter<PeliculaCreacionDto> = new EventEmitter<PeliculaCreacionDto>()
  ngOnInit() {
    this.form = this.formBuilder.group({
      titulo:['',Validators.required],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:''

    })
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value)
  }

}
