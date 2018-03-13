import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  @Input() aItems: Array<any>;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor() {
    this.outBorrarItem = new EventEmitter();
   }

  ngOnInit() {
  }

  deleteItem(i) {
    this.outBorrarItem.emit(i);
  }

}
