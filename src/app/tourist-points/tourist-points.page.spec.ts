import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouristPointsPage } from './tourist-points.page';

describe('TouristPointsPage', () => {
  let component: TouristPointsPage;
  let fixture: ComponentFixture<TouristPointsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
