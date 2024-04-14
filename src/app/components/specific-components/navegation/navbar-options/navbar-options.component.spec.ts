import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOptionsComponent } from './navbar-options.component';

describe('NavbarOptionsComponent', () => {
  let component: NavbarOptionsComponent;
  let fixture: ComponentFixture<NavbarOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
