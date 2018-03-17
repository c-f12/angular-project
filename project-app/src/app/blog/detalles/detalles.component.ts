import { Component, OnInit } from '@angular/core';
import { Post } from '../../modelos/blog';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  oPost: Post;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private blog: BlogService) { }

  ngOnInit() {
    this.oPost = {id: 0, titulo: '', autor: '',  contenido: ''};

    const id = this.activatedRoute.snapshot.params['id'];

    this.blog.getPost(id).then((value) => {this.oPost = value; })
    .catch(() => console.log('Error al mostrar la entrada'));

  }

  backToBlog() {
    this.router.navigateByUrl('/blog');
  }

}
