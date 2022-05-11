import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-item',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
  constructor() {}
  @Input() orderBy :any;
  @Input() orderType: any;
  @Output() queryEventEmitter = new EventEmitter<string>();
  @Output() orderEventEmitter = new EventEmitter<string>();
  query: string;

  ngOnInit(): void {}

  queryHandler() {
    this.queryEventEmitter.emit(this.query);
  }
  onSortClick(orderItems: any) {
    this.orderBy = orderItems.orderBy;
    this.orderType = orderItems.orderType;
    this.orderEventEmitter.emit(orderItems);
  }

  buttonClick() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
