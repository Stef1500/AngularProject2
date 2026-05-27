import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalList } from './pal-list';

describe('PalList', () => {
  let component: PalList;
  let fixture: ComponentFixture<PalList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalList],
    }).compileComponents();

    fixture = TestBed.createComponent(PalList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
