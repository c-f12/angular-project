import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  // estado = 'none';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    console.log('toggle');
    // this.estado === 'none' ? 'block' : 'none';
  }

  /*
        const menuList = document.querySelector('#menu-list');
        const navBars = document.querySelector('#nav-bars');

        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
            navBars.classList.add('fa-bars');
            navBars.classList.remove('fa-times');
        } else {
            menuList.style.display = 'block';
            navBars.classList.remove('fa-bars');
            navBars.classList.add('fa-times');
        }
  } */

}
