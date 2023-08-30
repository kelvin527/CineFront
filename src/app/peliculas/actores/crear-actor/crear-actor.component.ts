import { Component, OnInit } from '@angular/core';
import { actorCreacionDto } from '../actorDto.interface';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardar(actorDto:actorCreacionDto){
    console.log(actorDto);
  }
}
