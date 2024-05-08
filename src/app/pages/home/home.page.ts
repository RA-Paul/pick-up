import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Order } from 'src/app/classes/order';
import { OrderService } from 'src/app/services/order.service';
import { OrderPage } from '../order/order.page';
import { OrderAddPage } from '../order-add/order-add.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchText: string = '';
  pickedUp: boolean = true;
  orderList: Order[] = [];

  constructor(
    private orderService: OrderService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    let orderList: Order[] = [];

    orderList = this.orderService.getOrders(this.searchText, this.pickedUp);

    if (orderList.length > 0) {
      this.orderList = orderList;
    } else {
      this.orderList = [];
    }
  }

  showOrder(i: number) {
    let order: Order = this.orderList[i];

    this.modalController
      .create({
        component: OrderPage,
        componentProps: {
          order: order,
        },
        cssClass: 'modal-big',
      })
      .then((modal) => {
        modal.present();
      })
      .finally(() => {
        this.getOrders();
      });
  }

  toOrderAdd() {
    this.modalController
      .create({
        component: OrderAddPage,
        cssClass: 'modal-big',
      })
      .then((modal) => {
        modal.present();
      })
      .finally(() => {
        this.getOrders();
      });
  }

  changeStar(i: number) {
    let order: Order = this.orderList[i];

    order.star = !order.star;

    this.orderService.saveOrder(order);
  }

  changeStatus(i: number) {
    let order: Order = this.orderList[i];

    order.status = order.status === 'Pending' ? 'Completed' : 'Pending';

    this.orderService.saveOrder(order);
  }

  toSummaryPage() {
    this.router.navigate(['/summary']);
  }

  toOrderShowPage(i: number) {
    let orderId: number = this.orderList[i].orderId;

    this.router.navigate(['/order-show/' + orderId]);
  }
}
