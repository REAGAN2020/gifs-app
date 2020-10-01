import { TestBed } from '@angular/core/testing';

import { GIFSServiceService } from './gifs-service.service';

describe('GIFSServiceService', () => {
  let service: GIFSServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GIFSServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
