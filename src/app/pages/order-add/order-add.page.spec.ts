import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderAddPage } from './order-add.page';

describe('OrderAddPage', () => {
  let component: OrderAddPage;
  let fixture: ComponentFixture<OrderAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
