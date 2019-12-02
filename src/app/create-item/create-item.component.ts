import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ItemService} from '../item.service';
import {Item} from '../item';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  createForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    amountOfStock: new FormControl()
  });
  item: Item;

  constructor(private itemService: ItemService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.item = this.createForm.value;
    this.itemService.addItem(this.item).subscribe(item => this.item = item);
    this.router.navigateByUrl('/home');
  }

  reset() {
    this.createForm.reset();
  }

  goBack() {
    this.location.back();
  }

}


