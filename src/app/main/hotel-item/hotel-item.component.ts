import {Component, OnInit, Input} from '@angular/core';
import {IHotel, HotelsService} from '../../shared/service/hotels.service';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  @Input()
  public hotel: IHotel;

  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
    //console.log('При клике на тип приелетает: ',this.hotel);
    // console.log('Первый элемент из того что прилетело: ', this.hotel);
    //this.hotelService.changeHotel(this.hotel);
  }

  public changeHotel(hotel: IHotel){
    //console.log('hotel-item clicked: ', hotel);
    this.hotelService.changeHotel(hotel);
  }

}


//каждый отель прилетает из мейн компонента в цикле через фильтр. Те, которые прошли фильтр формируют отель-лист.

