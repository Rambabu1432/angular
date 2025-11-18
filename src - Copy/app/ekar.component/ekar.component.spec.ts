import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkarComponent } from './ekar.component';

describe('EkarComponent', () => {
  let component: EkarComponent;
  let fixture: ComponentFixture<EkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
