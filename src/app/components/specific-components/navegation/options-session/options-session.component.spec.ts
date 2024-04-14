import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSessionComponent } from './options-session.component';

describe('OptionsSessionComponent', () => {
  let component: OptionsSessionComponent;
  let fixture: ComponentFixture<OptionsSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
