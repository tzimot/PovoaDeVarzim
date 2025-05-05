import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralDataPage } from './general-data.page';

describe('GeneralDataPage', () => {
  let component: GeneralDataPage;
  let fixture: ComponentFixture<GeneralDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
