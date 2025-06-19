import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameDetailsComponent } from './user-game-details.component';

describe('UserGameDetailsComponent', () => {
  let component: UserGameDetailsComponent;
  let fixture: ComponentFixture<UserGameDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGameDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
