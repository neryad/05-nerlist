import { TestBed } from '@angular/core/testing';

import { DeseosService } from './deseos.service';

describe('DeseosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeseosService = TestBed.get(DeseosService);
    expect(service).toBeTruthy();
  });
});
