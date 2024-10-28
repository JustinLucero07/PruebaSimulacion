import { TestBed } from '@angular/core/testing';

import { OperacionesComponentService } from './operaciones-component.service';

describe('OperacionesComponentService', () => {
  let service: OperacionesComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionesComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
