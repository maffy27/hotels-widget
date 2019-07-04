import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {IHotel, HotelsService} from './shared/service/hotels.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'hw2-widget';

  public hotels: Observable<IHotel[]>;


  constructor(private hotelsService: HotelsService) {}

  public ngOnInit(): void {
    this.hotels = this.hotelsService.getHotels();
  }

}

