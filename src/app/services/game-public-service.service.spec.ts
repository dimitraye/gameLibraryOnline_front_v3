import { TestBed } from '@angular/core/testing';

import { GamePublicServiceService } from './game-public-service.service';

describe('GamePublicServiceService', () => {
  let service: GamePublicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePublicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
