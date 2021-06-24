import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideSideBar: boolean = false;
  openSetingMenue: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenue() {
    if (this.openSetingMenue == false) {
      this.openSetingMenue = true;
    } else {
      this.openSetingMenue = false;
    }
  }
  openSideMenue() {
    this.hideSideBar = true;
  }
  closeMenue() {
    this.hideSideBar = false;

  }

}
