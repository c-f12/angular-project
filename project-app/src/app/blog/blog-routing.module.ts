import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'post/:id', component: DetallesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
