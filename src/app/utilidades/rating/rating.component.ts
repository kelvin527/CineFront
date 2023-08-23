import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSelect:number = 0;
  ratingAnterior:any;
  votado=false;
  maximoaRatingArr:number[] = [];

 @Output()
 rated:EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
    this.maximoaRatingArr = Array(this.maximoRating).fill(0)

  }

  maousEnter(index:number):void{
    this.ratingSelect = index + 1;
  }
  mauseEleave():void{
    if(this.ratingAnterior !==0){
      this.ratingSelect = this.ratingAnterior;
    }else{
      this.ratingSelect = 0;
    }

  }

  rate(index:number):void{
    this.ratingSelect = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSelect;
    this.rated.emit(this.ratingSelect);
  }
}
