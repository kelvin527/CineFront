import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MenuComponent } from '../menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
//import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,

  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [

  ]
})
export class MaterialModule { }
