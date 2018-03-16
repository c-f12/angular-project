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
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.oPost = this.blog.getPost(id);
    } else {
      this.oPost = {id: 0, titulo: '', autor: '',  contenido: ''};
    }
  }

  backToBlog() {
    this.router.navigateByUrl('/blog');
  }

}
