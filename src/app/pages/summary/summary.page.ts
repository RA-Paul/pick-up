import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/classes/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  itemList: Item[] = [];

  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  toHomePage() {
    this.router.navigate(['/home']);
  }

  getItems() {
    let itemList: Item[] = [];
    itemList = this.itemService.getItems();

    if (itemList.length > 0) {
      this.itemList = itemList;
    } else {
      this.itemList = [];
    }
    console.log(this.itemList);
  }
}
