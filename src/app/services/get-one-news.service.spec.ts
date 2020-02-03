import { TestBed } from '@angular/core/testing';

import { GetOneNewsService } from './get-one-news.service';

describe('GetOneNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetOneNewsService = TestBed.get(GetOneNewsService);
    expect(service).toBeTruthy();
  });
});
