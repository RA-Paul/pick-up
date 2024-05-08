import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Order } from 'src/app/classes/order';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.page.html',
  styleUrls: ['./order-add.page.scss'],
})
export class OrderAddPage implements OnInit {
  order: Order = new Order();

  timeList: string[] = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
  ];
  departList: string[] = ['Depart 1', 'Depart 2', 'Depart 3', 'Depart 4'];
  itemNameList: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private navparams: NavParams,
    private orderService: OrderService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    let today = new Date();
    this.order.date =
      today.getFullYear() +
      '-' +
      ('0' + (today.getMonth() + 1)).substring(-2) +
      '-' +
      ('0' + today.getDate()).substring(-2);

    this.order.time = this.timeList[0];
    this.order.orderDepart = this.departList[0];
    this.order.pickupDepart = this.departList[0];
    this.order.item = this.itemNameList[0];
    this.order.quantity = 1;
  }

  addOrder() {
    let result: Boolean = this.orderService.addOrder(this.order);
    if (result) {
      this.modalController.dismiss();
    }
  }

  calculateBalance() {
    if (this.order.deposit > this.order.totalPrice) {
      this.order.deposit = this.order.totalPrice;
    }
    this.order.balance = this.order.totalPrice - this.order.deposit;
  }
}
