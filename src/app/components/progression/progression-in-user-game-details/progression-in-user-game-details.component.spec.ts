import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionInUserGameDetailsComponent } from './progression-in-user-game-details.component';

describe('ProgressionInUserGameDetailsComponent', () => {
  let component: ProgressionInUserGameDetailsComponent;
  let fixture: ComponentFixture<ProgressionInUserGameDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressionInUserGameDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressionInUserGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
