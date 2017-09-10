import { TestBed, inject } from '@angular/core/testing';

import { PollyService } from './polly.service';

describe('PollyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollyService]
    });
  });

  it('should ...', inject([PollyService], (service: PollyService) => {
    expect(service).toBeTruthy();
  }));
});
