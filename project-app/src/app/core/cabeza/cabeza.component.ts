import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    const menuList = document.querySelector('#menu-list');
    const navBars = document.querySelector('#nav-bars');

    menuList.classList.toggle('oculto');
  }
}
