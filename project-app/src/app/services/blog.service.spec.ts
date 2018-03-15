import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService, HttpClient],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
