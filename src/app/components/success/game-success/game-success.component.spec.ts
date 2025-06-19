import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSuccessComponent } from './game-success.component';

describe('GameSuccessComponent', () => {
  let component: GameSuccessComponent;
  let fixture: ComponentFixture<GameSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
