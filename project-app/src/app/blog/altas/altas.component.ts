import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Post } from '../../modelos/blog';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styles: []
})
export class AltasComponent implements OnInit {

  @ViewChild('form1') formBlog: any;
  oPost: Post;
  oValidado: Object;
  @Output() outAddPost: EventEmitter<Post>;

  constructor() {
    this.outAddPost = new EventEmitter();
   }

  ngOnInit() {
    this.resetPost();
    // Pasar class 'was-validated' de bootstrap al form:
    this.oValidado = { 'was-validated': true };
  }

  enviar() {
    this.outAddPost.emit(this.oPost);
    this.resetPost();
  }

  btnBorrar() {
    this.formBlog.reset();
  }

  private resetPost() {
    this.oPost = { id: undefined, autor: '', titulo: '', contenido: '' };
  }

}
