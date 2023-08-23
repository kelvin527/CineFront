import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculas=[{
        titulo:"Spiderman",
        fechaLanzamiento: new Date(),
        precio:60
      },
      {
        titulo:"Iroman",
        fechaLanzamiento: new Date(),
        precio:65
      }],
      this.peliculasEnCines=[{
        titulo:"Spiderman",
        fechaLanzamiento: new Date(),
        precio:60
      },
      {
        titulo:"Iroman",
        fechaLanzamiento: new Date(),
        precio:65
      },
      {
        titulo:"Iroman",
        fechaLanzamiento: new Date(),
        precio:65
      },
      {
        titulo:"Iroman",
        fechaLanzamiento: new Date(),
        precio:65
      },
    ]

    })
  }

  voto(index:number):void{
    alert(index)
  }
  title = 'Cine';
  peliculasEnCines:any;
  peliculas:any;
}
