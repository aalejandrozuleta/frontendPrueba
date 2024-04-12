import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetingsComponent } from './user-setings.component';

describe('UserSetingsComponent', () => {
  let component: UserSetingsComponent;
  let fixture: ComponentFixture<UserSetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSetingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
