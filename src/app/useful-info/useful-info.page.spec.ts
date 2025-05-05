import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsefulInfoPage } from './useful-info.page';

describe('UsefulInfoPage', () => {
  let component: UsefulInfoPage;
  let fixture: ComponentFixture<UsefulInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
