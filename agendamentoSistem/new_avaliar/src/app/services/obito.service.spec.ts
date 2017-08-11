import { TestBed, inject } from '@angular/core/testing';

import { ObitoService } from './obito.service';

describe('ObitoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObitoService]
    });
  });

  it('should be created', inject([ObitoService], (service: ObitoService) => {
    expect(service).toBeTruthy();
  }));
});
