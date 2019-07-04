import {Observable, of, BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";


export interface IHotel {
  img:string,
  address:string,
  phone:  number,
  weather: {
    title:string,
    icon:string,
    water:number,
    temperature: number
  },
  social_info:{
    title: string,
    img:string,
    followers:number,
    following:number
  },
  type: string
}


export const hotels: IHotel[] = [
  {
    img: '../../../assets/hotels_img/InterContinental.5star.jpg',
    address: '111 East 48th Street',
    phone:  18004699269, //+1(800)469-9269
    weather: {
      title: 'InterContinental Hotel',
      icon: 'icon_url',
      water: 20,
      temperature: 30
    },
    social_info:{
      title: 'InterContinental',
      img: '../../../assets/hotels_img/InterContinental.5star.interior.jpg',
      followers: 19485,
      following: 854
    },
    type: 'five'
  },

  {
    img: '../../../assets/hotels_img/central_park.5star.jpg',
    address: '36 Central Park South',
    phone:  18006759269,
    weather: {
      title: 'Park Lane Hotel',
      icon: 'icon_url',
      water: 18,
      temperature: 19
    },
    social_info:{
      title: 'Park Lane',
      img: '../../../assets/hotels_img/central_park.5star.interior.jpg',
      followers: 15053,
      following: 1005
    },
    type: 'five'
  },

  {
    img: '../../../assets/hotels_img/CourtyardbyMarriott.4star.jpg',
    address: '1717 Broadway',
    phone:  18004685624,
    weather: {
      title: 'Courtyard by Marriott',
      icon: 'icon_url',
      water: 27,
      temperature: 36
    },
    social_info:{
      title: 'Broadway',
      img: '../../../assets/hotels_img/CourtyardbyMarriott.4star.interior.jpg',
      followers: 29812,
      following: 1595
    },
    type: 'four'
  },

  {
    img: '../../../assets/hotels_img/HotelEdisonTimesSquare.3star.jpg',
    address: '228 West 47th Street',
    phone:  18001275623,
    weather: {
      title: 'Hotel Edison Times Square',
      icon: 'icon_url',
      water: 24,
      temperature: 27
    },
    social_info:{
      title: 'Edison Times',
      img: '../../../assets/hotels_img/HotelEdisonTimesSquare.3star.interior.jpg',
      followers: 3481,
      following: 934
    },
    type: 'three'
  },
  {
    img: '../../../assets/hotels_img/CourtyardNewYorkManhattan.3star.jpg',
    address: '114 West 40th Street',
    phone:  18001575343,
    weather: {
      title: 'Courtyard New York',
      icon: 'icon_url',
      water: 14,
      temperature: 23
    },
    social_info:{
      title: 'Courtyard',
      img: '../../../assets/hotels_img/CourtyardNewYorkManhattan.3star.interior.jpg',
      followers: 5373,
      following: 2591
    },
    type: 'three'
  },

  {
    img: '../../../assets/hotels_img/DaysHotelbyWyndham.2star.jpg',
    address: '215 West 94th Street',
    phone:  18008573623,
    weather: {
      title: 'Days Hotel by Wyndham',
      icon: 'icon_url',
      water: 21,
      temperature: 29
    },
    social_info:{
      title: 'Days Hotel',
      img: '../../../assets/hotels_img/DaysHotelbyWyndham.2star.interior.jpg',
      followers: 963,
      following: 451
    },
    type: 'two'
  },

  {
    img: '../../../assets/hotels_img/Bowery.1star.jpg',
    address: '143 Bowery',
    phone:  18001275126,
    weather: {
      title: 'Bowery Grand Hotel',
      icon: 'icon_url',
      water: 15,
      temperature: 33
    },
    social_info:{
      title: 'Bowery',
      img: '../../../assets/hotels_img/Bowery.1star.interior.jpg',
      followers: 1555,
      following: 105
    },
    type: 'one'
  },
];

@Injectable()
export class HotelsService {
  private currentHotel: BehaviorSubject<IHotel>;

  constructor () {
    this.currentHotel = new BehaviorSubject(hotels[0]);
  }

  public getHotels(): Observable<IHotel[]> {
    return of(hotels)
  }

  public getCurrentHotel (): Observable<IHotel> {
    return this.currentHotel.asObservable();
  }

  public changeHotel (hotel: IHotel): void {
    this.currentHotel.next(hotel);
  }
}








//
// import {Observable, of} from "rxjs";
// import {Injectable} from "@angular/compiler/src/core";
//
//
// export interface IHotel {
//   img:string,
//   address:string,
//   phone:  number,
//   weather: {
//     title:string,
//     icon:string,
//     water:number,
//     temperature: number
//   },
//   social_info:{
//     title: string,
//     img:string,
//     followers:number,
//     following:number
//   },
//   type: string
// }


// export const hotels: IHotel[] = [
//   {
//     img: 'img_url',
//     address: '15 Avenue Amsterdam',
//     phone:  1985834,
//     weather: {
//       title: 'Swissоtel Resort',
//       icon: 'icon_url',
//       water: 25,
//       temperature: 35
//     },
//     social_info:{
//       title: 'Facebook',
//       img: 'img_url',
//       followers: 155,
//       following: 105
//     },
//     type: 'five'
//   },
//
//   {
//     img: 'img_url',
//     address: '15 Avenue Amsterdam',
//     phone:  1985834,
//     weather: {
//       title: 'Swissоtel Resort',
//       icon: 'icon_url',
//       water: 25,
//       temperature: 35
//     },
//     social_info:{
//       title: 'Facebook',
//       img: 'img_url',
//       followers: 155,
//       following: 105
//     },
//     type: 'five'
//   },
//
//   {
//     img: 'img_url',
//     address: '15 Avenue Amsterdam',
//     phone:  1985834,
//     weather: {
//       title: 'Swissоtel Resort',
//       icon: 'icon_url',
//       water: 25,
//       temperature: 35
//     },
//     social_info:{
//       title: 'Facebook',
//       img: 'img_url',
//       followers: 155,
//       following: 105
//     },
//     type: 'four'
//   },
//
//   {
//     img: 'img_url',
//     address: '15 Avenue Amsterdam',
//     phone:  1985834,
//     weather: {
//       title: 'Swissоtel Resort',
//       icon: 'icon_url',
//       water: 25,
//       temperature: 35
//     },
//     social_info:{
//       title: 'Facebook',
//       img: 'img_url',
//       followers: 155,
//       following: 105
//     },
//     type: 'three'
//   },
//   {
//     img: 'img_url',
//     address: '15 Avenue Amsterdam',
//     phone:  1985834,
//     weather: {
//       title: 'Swissоtel Resort',
//       icon: 'icon_url',
//       water: 25,
//       temperature: 35
//     },
//     social_info:{
//       title: 'Facebook',
//       img: 'img_url',
//       followers: 155,
//       following: 105
//     },
//     type: 'three'
//   },
//
//   {
//     img: 'img_url',
//     address: '15 Avenue Amsterdam',
//     phone:  1985834,
//     weather: {
//       title: 'Swissоtel Resort',
//       icon: 'icon_url',
//       water: 25,
//       temperature: 35
//     },
//     social_info:{
//       title: 'Facebook',
//       img: 'img_url',
//       followers: 155,
//       following: 105
//     },
//     type: 'two'
//   },
//
//   {
//     img: 'img_url',
//     address: '15 Avenue Amsterdam',
//     phone:  1985834,
//     weather: {
//       title: 'Swissоtel Resort',
//       icon: 'icon_url',
//       water: 25,
//       temperature: 35
//     },
//     social_info:{
//       title: 'Facebook',
//       img: 'img_url',
//       followers: 155,
//       following: 105
//     },
//     type: 'one'
//   },
// ];
//
// export class HotelsService {
//
//   constructor() { }
//
//   public getHotels(): Observable<IHotel[]> {
//     return of(hotels)
//   }
// }
