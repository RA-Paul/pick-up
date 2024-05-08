export class Item {
  item: string;
  quantity: number;
  pickedUpQuantity: number;
  unPickedUpQuantity: number;

  constructor(
    item: string = '',
    quantity: number = 0,
    pickedUpQuantity: number = 0,
    unPickedUpQuantity: number = 0
  ) {
    this.item = item;
    this.quantity = quantity;
    this.pickedUpQuantity = pickedUpQuantity;
    this.unPickedUpQuantity = unPickedUpQuantity;
  }
}
