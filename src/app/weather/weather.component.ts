import {Component, OnInit, Input} from '@angular/core';
import {IHotel, HotelsService} from '../shared/service/hotels.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public hotel: IHotel;


  constructor(private hotelService: HotelsService) {
    this.hotelService.getCurrentHotel().subscribe(
      hotel => {
        this.hotel = hotel;
      }
    )

  }

  ngOnInit() {
  }

}
