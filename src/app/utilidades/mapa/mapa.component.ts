import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LeafletMouseEvent, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { coordenadas } from './coordenada.interface';
import { cinesDto } from 'src/app/cines/interface/cines.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Output()
  coordenadaSeleccionada:EventEmitter<coordenadas> =  new EventEmitter<coordenadas>();

  @Input()
  coordenadasIniciales:coordenadas[] = [];

  ngOnInit() {
    //esto es para mostrar un lugar inicial predeterminado
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud,valor.longitud]))
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(18.423781613767005, -70.1169240474701)
  };
  capas:Marker<any>[] = []//esto se usa para poder marcar algo en el mapa
  manejarClic(event:LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log(latitud,longitud)

    this.capas = []
    this.capas.push(marker([latitud,longitud],{
      icon:icon({
        iconSize:[25,41],//tamano del icono y esto es el tamano estandar
        iconAnchor:[13,41],//donde va a salir el icon cuando el usuario haga clic
        iconUrl:'marker-icon.png',//referencia al icono de leaflet que esta en el nodemodule
        iconRetinaUrl:'marker-icon-2x.px',//para uso en movil
        shadowUrl:'assets/marker-shadow.png'
      })
    }))

    this.coordenadaSeleccionada.emit({longitud:longitud,latitud:latitud})
  }
}


