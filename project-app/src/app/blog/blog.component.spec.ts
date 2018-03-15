import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { ListaComponent } from './lista/lista.component';
import { AltasComponent } from './altas/altas.component';

import { RouterTestingModule } from '@angular/router/testing';
import { PipeModule } from '../pipe/pipe.module';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent, ListaComponent, AltasComponent ],
      imports: [RouterTestingModule, PipeModule, FormsModule, HttpClientModule],
      providers: [ BlogService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
