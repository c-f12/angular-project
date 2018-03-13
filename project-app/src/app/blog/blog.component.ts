import { Component, OnInit } from '@angular/core';
import { Post } from '../modelos/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {
  aPosts: Array<Post>;

  constructor(public blogservice: BlogService) { }

  ngOnInit() {
    this.aPosts = [];
    this.blogservice.getPosts().then(
      response => this.aPosts = response
    );
  }

  deleteContacto (i) {
    this.blogservice.deletePost(i)
    .then(
      () => {this.blogservice.getPosts()
        .then(response =>  this.aPosts = response);
      });
  }

  addPost (oPost) {
    this.blogservice.postPosts(oPost)
    .then(
      () => {this.blogservice.getPosts()
        .then(response =>  this.aPosts = response);
      });
  }

}
