import { TestBed, inject } from '@angular/core/testing';

import { ServicemapService } from './servicemap.service';

describe('ServicemapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicemapService]
    });
  });

  it('should be created', inject([ServicemapService], (service: ServicemapService) => {
    expect(service).toBeTruthy();
  }));
});
