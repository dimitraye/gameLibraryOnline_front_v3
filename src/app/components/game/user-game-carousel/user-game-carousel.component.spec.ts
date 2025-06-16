import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameCarouselComponent } from './user-game-carousel.component';

describe('UserGameCarouselComponent', () => {
  let component: UserGameCarouselComponent;
  let fixture: ComponentFixture<UserGameCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGameCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserGameCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
