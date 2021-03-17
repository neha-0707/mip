import { TestBed } from '@angular/core/testing';

import { SendstockService } from './sendstock.service';

describe('SendstockService', () => {
  let service: SendstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
