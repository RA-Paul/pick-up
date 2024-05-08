import { Injectable } from '@angular/core';
import { Order } from '../classes/order';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderList: Order[] = [
    {
      orderId: 1,
      time: '10:00',
      date: '2024-05-01',
      orderNumber: '0001',
      name: 'RA Paul',
      phone: '0912345678',
      item: 'Item 1',
      quantity: 1,
      totalPrice: 100,
      deposit: 100,
      balance: 0,
      invoice: 'INV-0001',
      orderDepart: 'Depart 2',
      pickupDepart: 'Depart 2',
      note: 'Note 1',
      status: 'Pending',
      star: true,
    },
    {
      orderId: 2,
      time: '11:00',
      date: '2024-05-01',
      orderNumber: '0002',
      name: 'Jane Doe',
      phone: '0987645321',
      item: 'Item 2',
      quantity: 2,
      totalPrice: 200,
      deposit: 100,
      balance: 100,
      invoice: 'INV-0002',
      orderDepart: 'Depart 1',
      pickupDepart: 'Depart 2',
      note: 'Note 2',
      status: 'Completed',
      star: false,
    },
    {
      orderId: 3,
      time: '09:30',
      date: '2024-05-01',
      orderNumber: '0003',
      name: 'John Smith',
      phone: '0912312312',
      item: 'Item 3',
      quantity: 1,
      totalPrice: 150,
      deposit: 0,
      balance: 150,
      invoice: 'INV-0003',
      orderDepart: 'Depart 3',
      pickupDepart: 'Depart 2',
      note: 'Note 3',
      status: 'Pending',
      star: true,
    },
    {
      orderId: 4,
      time: '12:00',
      date: '2024-05-01',
      orderNumber: '0004',
      name: 'Emily Johnson',
      phone: '0912345123',
      item: 'Item 4',
      quantity: 3,
      totalPrice: 300,
      deposit: 150,
      balance: 150,
      invoice: 'INV-0004',
      orderDepart: 'Depart 2',
      pickupDepart: 'Depart 2',
      note: 'Note 4',
      status: 'Pending',
      star: false,
    },
    {
      orderId: 5,
      time: '14:30',
      date: '2024-05-01',
      orderNumber: '0005',
      name: 'Michael Brown',
      phone: '0912378956',
      item: 'Item 3',
      quantity: 2,
      totalPrice: 250,
      deposit: 100,
      balance: 150,
      invoice: 'INV-0005',
      orderDepart: 'Depart 1',
      pickupDepart: 'Depart 2',
      note: 'Note 5',
      status: 'Completed',
      star: true,
    },
  ];

  constructor() {}

  getOrders(searchText: string = '', pickedUp: boolean = true): Order[] {
    let orderList = this.orderList;

    orderList = this.searchOrders(orderList, searchText, pickedUp);

    // 按照日期、時間排序
    orderList = orderList.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      }

      if (a.time < b.time) {
        return -1;
      } else if (a.time < b.time) {
        return 1;
      }

      return 0;
    });

    //有星號優先
    orderList = orderList.sort((a, b) => {
      if (a.star && !b.star) {
        return -1;
      } else if (!a.star && b.star) {
        return 1;
      } else {
        return 0;
      }
    });

    return orderList;
  }

  searchOrders(
    orderList: Order[],
    searchText: string,
    pickedUp: boolean
  ): Order[] {
    if (searchText) {
      orderList = orderList.filter((order) => {
        if (
          order.name.toLowerCase().includes(searchText.toLowerCase()) ||
          order.phone.toLowerCase().includes(searchText.toLowerCase()) ||
          order.orderNumber.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }

    if (!pickedUp) {
      orderList = orderList.filter((order) => {
        return order.status === 'Pending';
      });
    }

    return orderList;
  }

  getOrderById(orderId: number): Order | undefined {
    let order: Order | undefined = new Order();

    order = this.orderList.find((order) => {
      return order.orderId === orderId;
    });

    return order;
  }

  addOrder(order: Order): Boolean {
    if (order.orderNumber == '') {
      alert('請優先輸入手寫單號!');
      return false;
    }

    let maxId = 0;
    this.orderList.forEach((element) => {
      if (element.orderId > maxId) {
        maxId = element.orderId;
      }
    });

    order.orderId = maxId + 1;
    this.orderList.push(order);

    return true;
  }

  saveOrder(order: Order) {
    let index: number = -1;
    index = this.getOrderIndexById(order.orderId);

    if (index != -1) {
      this.orderList[index] = order;
    }
  }

  getOrderIndexById(orderId: number): number {
    let index: number = -1;

    for (let i = 0; i < this.orderList.length; i++) {
      if (this.orderList[i].orderId === orderId) {
        index = i;
        break;
      }
    }

    return index;
  }
}
