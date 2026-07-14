import { TestBed } from '@angular/core/testing';

import { SvgMap } from './svg-map';

describe('SvgMap', () => {
  let service: SvgMap;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgMap);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
