import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Item} from '../item';
import { ActivatedRoute } from '@angular/router';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }
}
