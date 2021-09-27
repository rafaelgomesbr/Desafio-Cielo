import { TestBed } from '@angular/core/testing';

import { ConsultaContaService } from './consulta-conta.service';

describe('ConsultaContaService', () => {
  let service: ConsultaContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
