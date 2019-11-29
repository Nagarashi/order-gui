import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  private allItems: Item[];
  filteredItems: Item[];

  constructor(private itemService: ItemService) {
  }

  search(term: string): void {
    this.filteredItems = this.itemService.searchItems(this.allItems, term);
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.allItems = items);
  }

}
