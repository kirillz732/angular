import { TestBed } from '@angular/core/testing';

import { GetInfoService } from './get-info.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: GetInfoService = TestBed.get(GetInfoService);
    expect(service).toBeTruthy();
  });
});
