import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gittesting } from './gittesting';

describe('Gittesting', () => {
  let component: Gittesting;
  let fixture: ComponentFixture<Gittesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gittesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gittesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
