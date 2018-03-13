import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    FormComponent
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
