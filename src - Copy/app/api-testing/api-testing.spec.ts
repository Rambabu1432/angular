import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTesting } from './api-testing';

describe('ApiTesting', () => {
  let component: ApiTesting;
  let fixture: ComponentFixture<ApiTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
