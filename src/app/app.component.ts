import { Component } from '@angular/core';
import { ThemsService } from './services/style/thems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Work-shop';
  theme = localStorage.getItem('theme')
  constructor(
    public themeService: ThemsService
  ) {
  }



}
