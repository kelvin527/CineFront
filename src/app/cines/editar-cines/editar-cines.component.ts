import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cinesCreacionDto, cinesDto } from '../interface/cines.interface';

@Component({
  selector: 'app-editar-cines',
  templateUrl: './editar-cines.component.html',
  styleUrls: ['./editar-cines.component.css']
})
export class EditarCinesComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  modelo:cinesDto={nombre:'Sambil', latitud:1,longitud:1}

  ngOnInit():void {
    this.activeRoute.params.subscribe(params =>{
      // alert(params.id);
  })

  }

  guardarCambio(cine:cinesCreacionDto){
    console.log(cine)
  }
}
