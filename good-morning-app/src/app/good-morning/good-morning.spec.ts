import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodMorningComponent } from './good-morning';

describe('GoodMorningComponent', () => {
  let component: GoodMorningComponent;
  let fixture: ComponentFixture<GoodMorningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodMorningComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodMorningComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
