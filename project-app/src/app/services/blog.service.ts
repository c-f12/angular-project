import { Injectable } from '@angular/core';
import { Post } from '../modelos/blog';
import { HttpClient } from '@angular/common/http';

const urlApi = 'http://localhost:3000/posts';

@Injectable()
export class BlogService {
  private sURL: string;
  private aPosts: Array<Post>;
  private post: any;

  constructor(public http: HttpClient) {
    this.sURL = urlApi;
    this.aPosts = [];
   }

  getPosts() {
    return this.http.get(this.sURL).toPromise()
    .then((response: any) => {
      this.aPosts = response;
      return this.aPosts;
    });
  }

  postPosts(oPost) {
    console.log(oPost);
    return this.http.post(this.sURL, oPost).toPromise();
  }

  deletePost(id) {
    console.log(id);
    return this.http.delete(this.sURL + '/' + id).toPromise();
  }

  getPost(id: number) {
    // +id -> convert string to a number
    return this.http.get(this.sURL).toPromise()
    .then((response: any) => {
      this.aPosts = response;
      return this.aPosts.find(post => post.id === +id);
    });
  }

}
