import { TestBed } from '@angular/core/testing';

import { MusicService } from './music.service';

describe('MusicService', () => {
  let service: MusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
