import { Injectable } from '@angular/core';
import { Post } from '../modelos/blog';
import { HttpClient} from '@angular/common/http';

const urlApi = 'http://localhost:3000/posts';

@Injectable()
export class BlogService {
  private sURL: string;
  private aPosts: Array<Post>;

  constructor(public http: HttpClient) {
    this.sURL = urlApi;
    this.aPosts = [];
   }

}
