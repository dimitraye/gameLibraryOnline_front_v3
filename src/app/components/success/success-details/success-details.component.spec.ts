import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDetailsComponent } from './success-details.component';

describe('SuccessDetailsComponent', () => {
  let component: SuccessDetailsComponent;
  let fixture: ComponentFixture<SuccessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
