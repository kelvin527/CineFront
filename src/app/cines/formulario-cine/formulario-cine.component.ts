import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup
  ngOnInit() {
    this.form= this.formBuilder.group ({
      nombre:['',Validators.required]
    })

  }

}
