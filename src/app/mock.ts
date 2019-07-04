// import {Observable, of} from "rxjs";
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
//
//
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
//     phone:  1985834,   // дополнительно задание pipe для форматирования
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
//
// export const hotels$: Observable<IHotel[]> = of(hotels);
