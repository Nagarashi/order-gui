import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';
import {FormControl, FormGroup} from '@angular/forms';
import {ItemService} from '../item.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {
  @Input() item: Item;
  createForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    amountOfStock: new FormControl()
  });

  constructor(private itemService: ItemService, private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => {
        this.item = item;
        this.createForm.patchValue(this.item);
      });
  }

  onSubmit(): void {
    const item = this.createForm.value;
    console.log(item);
    this.itemService.updateItem(item)
      .subscribe(() => {this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }

  reset() {
    this.createForm.reset();
  }

}
