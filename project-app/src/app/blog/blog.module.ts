import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AltasComponent } from './altas/altas.component';
import { ListaComponent } from './lista/lista.component';
import { BlogService } from '../services/blog.service';
import { PipeModule } from '../pipe/pipe.module';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    FormsModule,
    PipeModule
  ],
  declarations: [
    BlogComponent,
    AltasComponent,
    ListaComponent,
    DetallesComponent
  ],
  providers: [
    BlogService
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
