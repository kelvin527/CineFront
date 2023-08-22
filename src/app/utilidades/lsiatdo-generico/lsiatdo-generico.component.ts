import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lsiatdo-generico',
  templateUrl: './lsiatdo-generico.component.html',
  styleUrls: ['./lsiatdo-generico.component.css']
})
export class LsiatdoGenericoComponent  {

  constructor() { }

  @Input()
  listado:any;

}
