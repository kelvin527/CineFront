import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent {

constructor(private router:Router){}
  guardar(){
    this.router.navigate(['/generos']);

  }
}
