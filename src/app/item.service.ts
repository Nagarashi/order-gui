import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Item} from './item';
import {filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemUrl = 'http://localhost:8400/items';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  /** GET items from the server */
  getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.itemUrl);
  }

 /* searchItems(items: Item[], term: string): Item[] {
    if (!term.trim()) {
      return [];
    }
    return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
  }*/
}
