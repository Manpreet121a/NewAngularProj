import { TestBed } from '@angular/core/testing';

import { GetsqldataserviceService } from './getsqldataservice.service';

describe('GetsqldataserviceService', () => {
  let service: GetsqldataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsqldataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
