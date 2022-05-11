import { Component, Input, OnInit } from '@angular/core';
import { Tarif } from '../models/tarif.model';

@Component({
  selector: 'card-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() list : Tarif = null;

  constructor() {}

  ngOnInit() {}
}
