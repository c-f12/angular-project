import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PipeModule } from '../../pipe/pipe.module';
import { BlogService } from '../../services/blog.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      imports: [RouterTestingModule, PipeModule, HttpClientModule],
      providers: [BlogService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
