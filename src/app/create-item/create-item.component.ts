import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(255)
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0.01)
    ]),
    amountOfStock: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ])
  });
  item: Item;

  constructor(private itemService: ItemService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  get name() { return this.createForm.get('name'); }
  get description() { return this.createForm.get('description'); }
  get price() { return this.createForm.get('price'); }
  get amountOfStock() { return this.createForm.get('amountOfStock'); }

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


