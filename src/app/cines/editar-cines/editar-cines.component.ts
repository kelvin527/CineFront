import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cines',
  templateUrl: './editar-cines.component.html',
  styleUrls: ['./editar-cines.component.css']
})
export class EditarCinesComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit():void {
    this.activeRoute.params.subscribe(params =>{
      // alert(params.id);
  })

  }

}
