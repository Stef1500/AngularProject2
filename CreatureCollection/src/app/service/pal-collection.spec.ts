import { TestBed } from '@angular/core/testing';

import { PalCollection } from './pal-collection';

describe('PalCollection', () => {
  let service: PalCollection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalCollection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
