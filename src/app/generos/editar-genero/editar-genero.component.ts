import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      alert(params.id)
    })
  }

}
