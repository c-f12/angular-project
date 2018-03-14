import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TextLengthPipe } from '../../pipe/text-length.pipe';
import { Post } from '../../modelos/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  aPosts: Array<Post>;

  @Input() aItems: Array<any>;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor(public blogservice: BlogService) {
      this.outBorrarItem = new EventEmitter();
   }

   ngOnInit() {
    this.aPosts = [];
    this.blogservice.getPosts().then(
      response => this.aPosts = response
    );
  }

  deleteItem(i) {
    this.outBorrarItem.emit(i);
  }

}
