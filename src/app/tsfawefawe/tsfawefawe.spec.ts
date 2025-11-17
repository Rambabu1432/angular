import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tsfawefawe } from './tsfawefawe';

describe('Tsfawefawe', () => {
  let component: Tsfawefawe;
  let fixture: ComponentFixture<Tsfawefawe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tsfawefawe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tsfawefawe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
