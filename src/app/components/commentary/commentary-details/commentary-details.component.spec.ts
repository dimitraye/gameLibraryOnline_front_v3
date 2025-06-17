import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaryDetailsComponent } from './commentary-details.component';

describe('CommentaryDetailsComponent', () => {
  let component: CommentaryDetailsComponent;
  let fixture: ComponentFixture<CommentaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentaryDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
