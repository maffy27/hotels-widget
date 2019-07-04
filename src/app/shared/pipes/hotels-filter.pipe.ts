import { Pipe, PipeTransform } from '@angular/core';
import {IHotel, HotelsService} from '../../shared/service/hotels.service';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  public transform(hotels: IHotel[]): string[] {
    return [...new Set(hotels.map(hotel => hotel.type))];
  }

}



// import { Pipe, PipeTransform } from '@angular/core';
// import {IHotel, HotelsService} from '../../shared/service/hotels.service';
//
// @Pipe({
//   name: 'hotelDetail'
// })
// export class HotelDetailPipe implements PipeTransform {
//
//   transform(hotels: IHotel[], selectedHotelType: string): IHotel[] {
//     if(!selectedHotelType){
//       return hotels;
//     }
//
//     return hotels.filter(hotel => hotel.type === selectedHotelType);
//   }
//
// }
