import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalCard } from './pal-card';

describe('PalCard', () => {
  let component: PalCard;
  let fixture: ComponentFixture<PalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PalCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
