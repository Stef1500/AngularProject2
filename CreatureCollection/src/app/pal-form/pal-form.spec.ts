import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalForm } from './pal-form';

describe('PalForm', () => {
  let component: PalForm;
  let fixture: ComponentFixture<PalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
