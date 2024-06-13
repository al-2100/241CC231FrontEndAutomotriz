import { TestBed } from '@angular/core/testing';

import { ProblemaTecnicoService } from './problema-tecnico.service';

describe('ProblemaTecnicoService', () => {
  let service: ProblemaTecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemaTecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
