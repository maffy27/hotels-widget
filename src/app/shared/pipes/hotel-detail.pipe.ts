import { Pipe, PipeTransform } from '@angular/core';
import {IHotel, HotelsService} from '../../shared/service/hotels.service';

@Pipe({
  name: 'hotelDetail'
})

export class HotelDetailPipe implements PipeTransform {

  transform(hotels: IHotel[], selectedHotelType: string): IHotel[] {
    if(!selectedHotelType){
      return hotels;
    }

    return hotels.filter(hotel => hotel.type === selectedHotelType);
  }

}


