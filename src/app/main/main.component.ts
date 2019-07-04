import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import {IHotel} from "../mock";
import {IHotel, HotelsService} from '../shared/service/hotels.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  public hotels: IHotel[];
  public hotel: IHotel;

  public selectedHotelType: string;


  constructor(private hotelService: HotelsService) {
    this.hotelService.getCurrentHotel().subscribe(
      hotel => {
        this.hotel = hotel;
      }
    )
  }

  ngOnInit() {
    // console.log('main comp', this.hotel);
    // this.hotelService.changeHotel(this.hotel);
  }

  public selectType(hotelType: string): void {
    //console.log('selectType (main.component)', hotelType);
    this.selectedHotelType = hotelType;
    const filteredHotels = this.hotels.filter(x => x.type === this.selectedHotelType);
    //console.log(filteredHotels);
    this.hotelService.changeHotel(filteredHotels[0]);
  }

}

