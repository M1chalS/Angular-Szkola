import { TestBed } from '@angular/core/testing';

import { KalkulatorService } from './kalkulator.service';

describe('KalkulatorService', () => {
  let service: KalkulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KalkulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
