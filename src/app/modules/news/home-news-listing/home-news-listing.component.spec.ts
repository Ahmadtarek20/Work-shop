import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsListingComponent } from './home-news-listing.component';

describe('HomeNewsListingComponent', () => {
  let component: HomeNewsListingComponent;
  let fixture: ComponentFixture<HomeNewsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
