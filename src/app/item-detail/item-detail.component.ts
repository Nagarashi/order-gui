import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Item} from '../item';
import { ActivatedRoute } from '@angular/router';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService, private location: Location) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack() {
    this.location.go('/items');
  }

  edit() {
  }
}
