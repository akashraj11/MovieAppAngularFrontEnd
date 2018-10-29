import { TestBed, inject } from '@angular/core/testing';

import { MovieserviceService } from './movieservice.service';

describe('MovieserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieserviceService]
    });
  });

  it('should be created', inject([MovieserviceService], (service: MovieserviceService) => {
    expect(service).toBeTruthy();
  }));
});
