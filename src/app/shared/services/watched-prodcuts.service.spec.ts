import { TestBed } from '@angular/core/testing';

import { WatchedProdcutsService } from './watched-prodcuts.service';

describe('WatchedProdcutsService', () => {
  let service: WatchedProdcutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchedProdcutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
