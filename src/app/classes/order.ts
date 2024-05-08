export class Order {
  orderId: number;
  time: string;
  date: string;
  orderNumber: string;
  name: string;
  phone: string;
  item: string;
  quantity: number;
  totalPrice: number;
  deposit: number;
  balance: number;
  invoice: string;
  orderDepart: string;
  pickupDepart: string;
  note: string;
  status: string;
  star: boolean = false;

  constructor(
    orderId: number = 0,
    time: string = '',
    date: string = '',
    orderNumber: string = '',
    name: string = '',
    phone: string = '',
    item: string = '',
    quantity: number = 0,
    totalPrice: number = 0,
    deposit: number = 0,
    balance: number = 0,
    invoice: string = '',
    orderDepart: string = '',
    pickupDepart: string = '',
    note: string = '',
    status: string = '',
    star: boolean = false
  ) {
    this.orderId = orderId;
    this.time = time;
    this.date = date;
    this.orderNumber = orderNumber;
    this.name = name;
    this.phone = phone;
    this.item = item;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.deposit = deposit;
    this.balance = balance;
    this.invoice = invoice;
    this.orderDepart = orderDepart;
    this.pickupDepart = pickupDepart;
    this.note = note;
    this.status = status;
    this.star = star;
  }
}
