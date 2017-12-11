import { TestBed, inject } from '@angular/core/testing';

import { GoldDataService } from './gold-data.service';

describe('GoldDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoldDataService]
    });
  });

  it('should be created', inject([GoldDataService], (service: GoldDataService) => {
    expect(service).toBeTruthy();
  }));
});
