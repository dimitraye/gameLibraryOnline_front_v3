import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSidebarComponent } from './success-sidebar.component';

describe('SuccessSidebarComponent', () => {
  let component: SuccessSidebarComponent;
  let fixture: ComponentFixture<SuccessSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
