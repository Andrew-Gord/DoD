import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorComponent } from './prior.component';

describe('PriorComponent', () => {
  let component: PriorComponent;
  let fixture: ComponentFixture<PriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
