import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarif } from './components/models/tarif.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  tarifData: object[];
  sortedTarifData: object[];
  orderBy: string;
  orderType: string;
  title: string;
  url : string = '../assets/data.json';

  constructor(private http: HttpClient) {
    this.title = 'xovirev'
    this.orderBy = 'tarifName';
    this.orderType = 'desc';
  }

  ngOnInit(): void {
    this.http.get<object[]>(this.url).subscribe((tarif) => {
      this.tarifData = tarif;
      this.sortedTarifData = tarif;
      this.sortTarif();
    });
  }

  orderTarif(orderData) {
    this.orderBy = orderData.orderBy;
    this.orderType = orderData.orderType;
    this.sortTarif();
  }

  searchTarif(theQuery: string) {
    this.sortedTarifData = this.tarifData.filter((item: Tarif) => {
      return (
        item.tarifName.toLowerCase().includes(theQuery.toLowerCase()) ||
        item.speed.upload.toLowerCase().includes(theQuery.toLowerCase()) ||
        item.speed.download.toLowerCase().includes(theQuery.toLowerCase()) ||
        item.benefit.type1.toLowerCase().includes(theQuery.toLowerCase())||
        item.price.includes(theQuery.toLowerCase())
      );
    });
    this.sortTarif();
  }

  sortTarif() {
    //
    let order = (this.orderType === 'asc') ? 1 : -1;

    //sort by upload
    this.sortedTarifData.sort((a: Tarif, b: Tarif) => {

      if (parseFloat(a.speed.upload) < parseFloat(b.speed.upload)) {
        return -1 * order;
      }
      if (parseFloat(a.speed.upload) > parseFloat(b.speed.upload)) {
        return 1 * order;
      }
    });
    //sort by download
    this.sortedTarifData.sort((a: Tarif, b: Tarif) => {

      if (parseFloat(a.speed.download) < parseFloat(b.speed.download)) {
        return -1 * order;
      }
      if (parseFloat(a.speed.download) > parseFloat(b.speed.download)) {
        return 1 * order;
      }
    });


    //sort by tarifName
    this.sortedTarifData.sort((a: Tarif, b: Tarif) => {
      if(typeof a[this.orderBy]!=='string'){
        return;
      }
      if (a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()) {
        return -1 * order;
      }
      if (a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()) {
        return 1 * order;
      }
    });

    //sort by benefit.type1
    this.sortedTarifData.sort((a: Tarif, b: Tarif) => {
      if(typeof a.benefit.type1[this.orderBy]!=='string'){
        return;
      }
      if (a.benefit.type1[this.orderBy].toLowerCase() < b.benefit.type1[this.orderBy].toLowerCase()) {
        return -1 * order;
      }
      if (a.benefit.type1[this.orderBy].toLowerCase() > b.benefit.type1[this.orderBy].toLowerCase()) {
        return 1 * order;
      }
    });
    //sort by price
    this.sortedTarifData.sort((a: Tarif, b: Tarif) => {

      if (parseFloat(a[this.orderBy] )< parseFloat(b[this.orderBy])) {
        return -1 * order;
      }
      if (parseFloat(a[this.orderBy] )> parseFloat(b[this.orderBy])) {
        return 1 * order;
      }
    });

  }
}
