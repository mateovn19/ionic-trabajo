import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaracterDetailPage } from './caracter-detail.page';

describe('CaracterDetailPage', () => {
  let component: CaracterDetailPage;
  let fixture: ComponentFixture<CaracterDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaracterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
