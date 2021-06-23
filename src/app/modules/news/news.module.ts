import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { HomeNewsListingComponent } from './home-news-listing/home-news-listing.component';
import { NewsCardModule } from '../shared/news-card/news-card.module';


@NgModule({
  declarations: [NewsListComponent, NewsDetailsComponent, HomeNewsListingComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NewsCardModule
  ],
  exports: [
    HomeNewsListingComponent
  ]
})
export class NewsModule { }
