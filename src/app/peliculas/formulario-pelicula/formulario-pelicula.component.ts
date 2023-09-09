import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDto, PeliculaDto } from 'src/app/crear-pelicula/crearPelicula.interface';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup

  @Input()
  modelo:PeliculaDto

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
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value)
  }

  seleccionarArchivo(evento:File){
    this.form.get("poster").setValue(evento)
  }

  changeMarkdown2(evento:string){
    this.form.get('resumen').setValue(evento)
  }
}
