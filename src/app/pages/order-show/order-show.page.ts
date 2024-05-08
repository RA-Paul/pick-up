import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-show',
  templateUrl: './order-show.page.html',
  styleUrls: ['./order-show.page.scss'],
})
export class OrderShowPage implements OnInit {
  orderId: number = -1;
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
  itemNameList: string[] = ['Order 1', 'Order 2', 'Order 3', 'Order 4'];
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let orderId = params.get('orderId');
      if (orderId != null) {
        this.orderId = parseInt(orderId);
      } else {
        this.goBack();
      }
    });

    let order: Order | undefined = this.orderService.getOrderById(this.orderId);
    if (order != undefined) {
      this.order = order;
    } else {
      this.goBack();
    }
  }

  changeStatus() {
    let order: Order = this.order;

    order.status = order.status === 'Pending' ? 'Completed' : 'Pending';

    this.orderService.saveOrder(order);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['home']);
  }
}
