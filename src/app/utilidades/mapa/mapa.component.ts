import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LeafletMouseEvent, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { coordenadas } from './coordenada.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Output()
  coordenadaSeleccionada:EventEmitter<coordenadas> =  new EventEmitter<coordenadas>();

  ngOnInit() {}

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
  capas:Marker<any>[] = []//esto se usa para poder marcar algo en el mapa
  manejarClic(event:LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log(latitud,longitud)

    this.capas = []
    this.capas.push(marker([latitud,longitud]))

    this.coordenadaSeleccionada.emit({longitud:longitud,latitud:latitud},{
      icon:icon({
        iconSize:[25,41],
        iconAnchor:[13,41],
        iconUrl:'marker-icon.png',
        iconRetinaUrl:'marker-icon-2x.px',
        shadowUrl:'assets/marker-shadow.png'
      })
    })
  }
}


