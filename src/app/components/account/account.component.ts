import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  selectedTab = 0;
  constructor() { }

  ngOnInit() {

  }

  tabChange($event: any) {
    this.selectedTab = $event.index;
  }
  setTab($event: number) {
    this.selectedTab = $event;
  }

}
