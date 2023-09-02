import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../comvertidorBase64';
import { __values } from 'tslib';
import { actorCreacionDto, actorDto } from 'src/app/peliculas/actores/actorDto.interface';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor() { }

imagenBase64:string //esto es para mostrar las imagenes

@Input()
urlImegaenActual:string; //esto es para mostrar la foto en modo de ediccion
  @Output()
  seleccionarArchivo:EventEmitter<File> = new EventEmitter<File>();
  ngOnInit() {
  }

  change(event){
    if(event.target.files.length > 0){
      const file: File = event.target.files[0] //esto esto es para obtener la imagen seleccionada
      toBase64(file).then((value:string)=> this.imagenBase64=value)
      .catch(error =>console.log(error));
      this.seleccionarArchivo.emit(file);

    }
  }
}
