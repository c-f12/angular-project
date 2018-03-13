import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';
import { RouterModule } from '@angular/router';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CabezaComponent,
    PieComponent
  ],
  exports: [
    CabezaComponent,
    PieComponent
  ]
})
export class CoreModule { }
