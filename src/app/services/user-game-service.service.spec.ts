import { TestBed } from '@angular/core/testing';

import { UserGameServiceService } from './user-game-service.service';

describe('UserGameServiceService', () => {
  let service: UserGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
