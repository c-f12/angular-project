import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  classvisible = true;

  @ViewChild('navBars') navBars: any;
  @ViewChild('menuList') menuList: any;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if (this.menuList.nativeElement.classList.contains('oculto')) {
      this.navBars.nativeElement.classList.remove('fa-bars');
      this.navBars.nativeElement.classList.add('fa-times');
    } else {
      this.navBars.nativeElement.classList.remove('fa-times');
      this.navBars.nativeElement.classList.add('fa-bars');
    }
  }
}
