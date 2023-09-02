import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { actorCreacionDto, actorDto } from '../actorDto.interface';

@Component({
  selector: 'app-farmulario-actores',
  templateUrl: './farmulario-actores.component.html',
  styleUrls: ['./farmulario-actores.component.css']
})
export class FarmularioActoresComponent implements OnInit {

  constructor(private formBulder:FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: actorDto;

  @Output()
  OnSubmit: EventEmitter<actorCreacionDto> = new EventEmitter<actorCreacionDto>();

  ngOnInit(): void {
    this.form = this.formBulder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      fechaNacimiento: '',
      foto: ''

    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  seleccionarArchivo(file){
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string){
    this.form.get('biografia').setValue(texto);
  }

  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }
}
