import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameFormComponent } from './user-game-form.component';

describe('UserGameFormComponent', () => {
  let component: UserGameFormComponent;
  let fixture: ComponentFixture<UserGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGameFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
