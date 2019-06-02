import { TestBed } from '@angular/core/testing';

import { GridsService } from './grids.service';

describe('GridsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridsService = TestBed.get(GridsService);
    expect(service).toBeTruthy();
  });
});
