import { Component, OnInit } from '@angular/core';
import { actorCreacionDto, actorDto } from '../actorDto.interface';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor() { }

  modelo:actorDto={nombre:'kelvin', fechaNacimiento:new Date(), foto:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw0.peakpx.com%2Fwallpaper%2F785%2F821%2FHD-wallpaper-marvel.jpg&tbnid=yW6LvcruvaQ0mM&vet=12ahUKEwiMuqexuYiBAxWnQTABHQieDAQQMygAegQIARBY..i&imgrefurl=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-nueyi&docid=qZhmtf6UpaSVHM&w=800&h=1422&q=imagenes%20marvel%20hd&ved=2ahUKEwiMuqexuYiBAxWnQTABHQieDAQQMygAegQIARBY'}
  ngOnInit() {
  }
  guardarCambios(actor: actorCreacionDto){
    console.log(actor);

  }
}
