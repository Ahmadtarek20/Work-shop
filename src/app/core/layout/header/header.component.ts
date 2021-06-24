import { Component, OnInit } from '@angular/core';
import { ThemsService } from 'src/app/services/style/thems.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideSideBar: boolean = false;
  openSetingMenue: boolean = false;
  theme = localStorage.getItem('theme')

  constructor(
    public themeService: ThemsService
  ) { }

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
  changeTheme() {
    this.themeService.changeTheme();
  }
}
