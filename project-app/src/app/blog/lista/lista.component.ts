import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TextLengthPipe } from '../../pipe/text-length.pipe';
import { Post } from '../../modelos/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  aPosts: Array<Post>;

  @Input() aItems: Array<any>;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor(public blogservice: BlogService) {
      this.outBorrarItem = new EventEmitter();
   }

  ngOnInit() {
  }

  deleteItem(item) {
    this.outBorrarItem.emit(item);
    console.log(item);
  }

}
