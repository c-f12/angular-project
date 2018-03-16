import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Post } from '../../modelos/blog';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
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
  }

  enviar() {
    this.outAddPost.emit(this.oPost);
    this.btnBorrar();
  }

  btnBorrar() {
    this.formBlog.reset();
  }

  private resetPost() {
    this.oPost = { id: undefined, autor: '', titulo: '', contenido: '' };
  }

}
