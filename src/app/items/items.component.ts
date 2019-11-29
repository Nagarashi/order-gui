import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  private getItems(): void {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }
}
