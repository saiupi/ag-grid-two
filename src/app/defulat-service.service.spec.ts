import { TestBed } from '@angular/core/testing';

import { DefulatServiceService } from './defulat-service.service';

describe('DefulatServiceService', () => {
  let service: DefulatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefulatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
