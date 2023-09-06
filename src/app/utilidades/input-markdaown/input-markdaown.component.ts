import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdaown',
  templateUrl: './input-markdaown.component.html',
  styleUrls: ['./input-markdaown.component.css']
})
export class InputMarkdaownComponent implements OnInit {

  contenidoMarkDown:any;
  changeMarkdown:any;

    @Output()
    changeMarkdown2:EventEmitter<string> = new EventEmitter<string>()

    @Input()
    placeHolderTextArea:string = 'Texto';
  constructor() { }

  ngOnInit() {
  }

  inputTextArea(evento:any){
    const texto = evento.target.value;
    this.contenidoMarkDown = texto
    this.changeMarkdown.emit(texto)
    console.log(texto)
  }

}
