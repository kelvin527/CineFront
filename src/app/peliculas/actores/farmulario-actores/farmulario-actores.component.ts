import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { actorCreacionDto } from '../actorDto.interface';

@Component({
  selector: 'app-farmulario-actores',
  templateUrl: './farmulario-actores.component.html',
  styleUrls: ['./farmulario-actores.component.css']
})
export class FarmularioActoresComponent implements OnInit {

  constructor(private formBulder:FormBuilder) { }

  form: FormGroup;
  @Output()
  submit:EventEmitter<actorCreacionDto> = new EventEmitter<actorCreacionDto>();

  ngOnInit() {
    this.form = this.formBulder.group ({
      nombre:['', {Validators:[Validators.required]}],
      fechaNacimiento:''
  })
  }
  onSubmit(){
    this.submit.emit(this.form.value)
  }
}
