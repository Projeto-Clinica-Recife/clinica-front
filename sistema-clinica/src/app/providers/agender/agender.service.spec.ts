import { TestBed } from '@angular/core/testing';

import { AgenderService } from './agender.service';

describe('AgenderService', () => {
  let service: AgenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
