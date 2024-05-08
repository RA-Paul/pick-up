import { Injectable } from '@angular/core';
import { Item } from '../classes/item';
import { Order } from '../classes/order';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private orderService: OrderService) {}

  getItems(): Item[] {
    let orderList = this.orderService.getOrders();

    //獲取個項目的數量
    let itemList: Item[] = [];

    orderList.forEach((order) => {
      let item: Item = new Item();
      item.item = order.item;
      item.quantity = order.quantity;
      item.pickedUpQuantity = order.status === 'Completed' ? order.quantity : 0;
      item.unPickedUpQuantity =
        order.status === 'Completed' ? 0 : order.quantity;

      for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].item === item.item) {
          itemList[i].quantity += item.quantity;
          itemList[i].pickedUpQuantity += item.pickedUpQuantity;
          itemList[i].unPickedUpQuantity += item.unPickedUpQuantity;
          return;
        }
      }

      itemList.push(item);
    });

    itemList = itemList.sort((a, b) => {
      if (a.item < b.item) {
        return -1;
      } else if (a.item > b.item) {
        return 1;
      } else {
        return 0;
      }
    });

    return itemList;
  }
}
