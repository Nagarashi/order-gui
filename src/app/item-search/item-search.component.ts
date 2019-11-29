import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {

  @Input()
  allItems: Item[];

  @Output()
  filteredItems = new EventEmitter<Item[]>();

  constructor() {
  }

  ngOnInit() {
  }

  searchItems(term: string) {
    if (!term.trim()) {
      this.filteredItems.emit(this.allItems);
    } else {
      this.filteredItems.emit(this.allItems.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
    }
  }
}
