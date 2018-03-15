import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesComponent } from './detalles.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../../services/blog.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



describe('DetallesComponent', () => {
  let component: DetallesComponent;
  let fixture: ComponentFixture<DetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ BlogService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
