import { Component, OnInit, ViewChild } from '@angular/core';
import { MarcasIf } from './data/master.model';
import { Marcas } from './data/master.data';
import { UserDataIf } from './data/userdata.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  aMarcas: Array<MarcasIf>;
  userData: UserDataIf;

  @ViewChild('nombreState') nombreState: any;

  constructor() { }

  ngOnInit() {
    this.aMarcas = Marcas;
    this.userData = {
      nombre: '',
      email: '',
      marcas: { id: '', marca: ''},
      comentarios: '',
    };

    console.dir(this.nombreState);
    console.dir(this.aMarcas);
    console.log(this.userData);
  }

  enviar() {
    document.querySelector('.result-form').classList.toggle('oculto');

    for (const key in this.userData) {
      if (this.userData.hasOwnProperty(key)) {
      localStorage.setItem(key, this.userData[key]);
      }
    }

    console.log(this.userData);
    console.log('submit');
  }

}
