import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cinesCreacionDto } from '../interface/cines.interface';
import { coordenadas } from 'src/app/utilidades/mapa/coordenada.interface';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  coordenadasIniciales:coordenadas[] = [];
  form:FormGroup
  @Input()
  modelo:cinesCreacionDto
  @Output()
  guardarCambio:EventEmitter<cinesCreacionDto> = new EventEmitter<cinesCreacionDto>();

  ngOnInit() {
    this.form= this.formBuilder.group ({
      nombre:['',Validators.required],
      latitud:['',Validators.required],
      longitud:['',Validators.required]
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadasIniciales.push({ latitud:this.modelo.latitud, longitud:this.modelo.longitud})//esto recibre las coodenadas iniciales
    }
  }

  onSubmit(){
    this.guardarCambio.emit(this.form.value)
  }

  coordenadaSeleccionada(cordenada:coordenadas){
    this.form.patchValue(cordenada)
  }
}
