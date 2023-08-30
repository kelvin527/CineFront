import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MenuComponent } from '../menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
/*MatFormFieldModule y MatInputModule sirven para trabajar lo visual
en el formulario, esto viene de angular material*/
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
//MatDatepickerModule y MatNativeDateModule sirve para poder trabajar con fechas y darle el diseno de calendario
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';




@NgModule({
  imports: [
    CommonModule,

  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [

  ]
})
export class MaterialModule { }
