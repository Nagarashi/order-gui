import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-counter',
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.scss']
})
export class CharacterCounterComponent implements OnInit {
  @Input() input: number;

  constructor() { }

  ngOnInit() {
  }

}
