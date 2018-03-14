import { Component, OnInit } from '@angular/core';
import { Post } from '../../modelos/blog';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: []
})
export class DetallesComponent implements OnInit {

  oPost: Post;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private catalogo: BlogService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.oPost = this.catalogo.getPost(id);
    } else {
      this.oPost = {id: 0, titulo: '', autor: '',  contenido: ''};
    }
  }

}
