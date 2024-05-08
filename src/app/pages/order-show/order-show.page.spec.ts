import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderShowPage } from './order-show.page';

describe('OrderShowPage', () => {
  let component: OrderShowPage;
  let fixture: ComponentFixture<OrderShowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
