import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideSideBar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenue() {

  }
  openSideMenue() {
    this.hideSideBar = true;
  }
  closeMenue() {
    this.hideSideBar = false;

  }

}
