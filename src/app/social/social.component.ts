import {Component, OnInit, Input} from '@angular/core';
import {HotelsService, IHotel} from "../shared/service/hotels.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

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
