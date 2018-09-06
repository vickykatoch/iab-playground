import { TestBed, inject } from '@angular/core/testing';

import { IabServicesService } from './iab-services.service';

describe('IabServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IabServicesService]
    });
  });

  it('should be created', inject([IabServicesService], (service: IabServicesService) => {
    expect(service).toBeTruthy();
  }));
});
