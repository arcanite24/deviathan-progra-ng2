import { TestBed, inject } from '@angular/core/testing';
import { BackServiceService } from './back-service.service';

describe('BackServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackServiceService]
    });
  });

  it('should ...', inject([BackServiceService], (service: BackServiceService) => {
    expect(service).toBeTruthy();
  }));
});
