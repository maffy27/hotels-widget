(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<ng-template #loading>\n  ...\n</ng-template>\n\n\n<h1>Hot Weather Widget</h1>\n\n<div class=\"element\" *ngIf=\"(hotels | async) as hotels; else loading\">\n\n  <app-main [hotels]=\"hotels\"></app-main>\n\n  <div class=\"element-right\">\n    <app-weather></app-weather>\n    <app-social></app-social>\n  </div>\n\n  <div class=\"clear\"> </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/hotel-item/hotel-item.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/hotel-item/hotel-item.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"activity-desc\" (click)=\"changeHotel(hotel)\" >\n    <h5>{{hotel.address}}</h5>\n    <p>{{hotel.weather.title}}</p>\n    <h6>Tel: {{hotel.phone | formatPhone}}</h6>\n  </div>\n  <div class=\"activity-img\" (click)=\"changeHotel(hotel)\">\n    <ul>\n      <li><img src='{{hotel.img}}' alt=\"\"/></li>\n      <li><img src='{{hotel.social_info.img}}'  alt=\"\"/></li>\n    </ul>\n  </div>\n  <div class=\"clear\"> </div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-left\">\n  <div class=\"element-bg-img\"><img width=\"310\" height=\"180\" src=\"{{hotel.img}}\" alt=\"\" class=\"img-responsive\"> </div>\n  <div class=\"element-left-bottom\">\n    <div class=\"ele-strip\">\n      <ul>\n        <li *ngFor=\"let hotel of hotels | hotelsFilter\" (click)=\"selectType(hotel)\"><a href=\"#\">{{hotel}}&#9733;</a></li>\n      </ul>\n    </div>\n    <div class=\"village\">\n      <h3>Righteous indignation & like</h3>\n      <span class=\"line\"> </span>\n      <div class=\"activity_box\">\n        <div class=\"scrollbar\" id=\"style-2\">\n\n          <div class=\"activity-row\" *ngFor=\"let hotel of hotels | hotelDetail: selectedHotelType\">\n            <app-hotel-item [hotel]=\"hotel\"></app-hotel-item>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/social/social.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/social/social.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{hotel.social_info.title}}</h4>\n    <span class=\"w-line\"> </span>\n    <img src=\"{{hotel.social_info.img}}\" alt=\"\" width=\"100\" height=\"100\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>{{hotel.social_info.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>{{hotel.social_info.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather/weather.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{hotel.weather.title}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>{{hotel.weather.temperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{hotel.weather.water}}<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/service/hotels.service */ "./src/app/shared/service/hotels.service.ts");



let AppComponent = class AppComponent {
    constructor(hotelsService) {
        this.hotelsService = hotelsService;
        this.title = 'hw2-widget';
    }
    ngOnInit() {
        this.hotels = this.hotelsService.getHotels();
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _shared_pipes_hotels_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipes/hotels-filter.pipe */ "./src/app/shared/pipes/hotels-filter.pipe.ts");
/* harmony import */ var _main_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/hotel-item/hotel-item.component */ "./src/app/main/hotel-item/hotel-item.component.ts");
/* harmony import */ var _shared_pipes_hotel_detail_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/pipes/hotel-detail.pipe */ "./src/app/shared/pipes/hotel-detail.pipe.ts");
/* harmony import */ var _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/service/hotels.service */ "./src/app/shared/service/hotels.service.ts");
/* harmony import */ var _shared_pipes_format_phone_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/format-phone.pipe */ "./src/app/shared/pipes/format-phone.pipe.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"],
            _social_social_component__WEBPACK_IMPORTED_MODULE_5__["SocialComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            _shared_pipes_hotels_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["HotelsFilterPipe"],
            _main_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_8__["HotelItemComponent"],
            _shared_pipes_hotel_detail_pipe__WEBPACK_IMPORTED_MODULE_9__["HotelDetailPipe"],
            _shared_pipes_format_phone_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatPhonePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [
            { provide: _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_10__["HotelsService"], useClass: _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_10__["HotelsService"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/main/hotel-item/hotel-item.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/hotel-item/hotel-item.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG90ZWwtaXRlbS9ob3RlbC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/hotel-item/hotel-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/hotel-item/hotel-item.component.ts ***!
  \*********************************************************/
/*! exports provided: HotelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelItemComponent", function() { return HotelItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/hotels.service */ "./src/app/shared/service/hotels.service.ts");



let HotelItemComponent = class HotelItemComponent {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    ngOnInit() {
        //console.log('При клике на тип приелетает: ',this.hotel);
        // console.log('Первый элемент из того что прилетело: ', this.hotel);
        //this.hotelService.changeHotel(this.hotel);
    }
    changeHotel(hotel) {
        //console.log('hotel-item clicked: ', hotel);
        this.hotelService.changeHotel(hotel);
    }
};
HotelItemComponent.ctorParameters = () => [
    { type: _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HotelItemComponent.prototype, "hotel", void 0);
HotelItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotel-item',
        template: __webpack_require__(/*! raw-loader!./hotel-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/hotel-item/hotel-item.component.html"),
        styles: [__webpack_require__(/*! ./hotel-item.component.css */ "./src/app/main/hotel-item/hotel-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"]])
], HotelItemComponent);

//каждый отель прилетает из мейн компонента в цикле через фильтр. Те, которые прошли фильтр формируют отель-лист.


/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/hotels.service */ "./src/app/shared/service/hotels.service.ts");


//import {IHotel} from "../mock";

let MainComponent = class MainComponent {
    constructor(hotelService) {
        this.hotelService = hotelService;
        this.hotelService.getCurrentHotel().subscribe(hotel => {
            this.hotel = hotel;
        });
    }
    ngOnInit() {
        // console.log('main comp', this.hotel);
        // this.hotelService.changeHotel(this.hotel);
    }
    selectType(hotelType) {
        //console.log('selectType (main.component)', hotelType);
        this.selectedHotelType = hotelType;
        const filteredHotels = this.hotels.filter(x => x.type === this.selectedHotelType);
        //console.log(filteredHotels);
        this.hotelService.changeHotel(filteredHotels[0]);
    }
};
MainComponent.ctorParameters = () => [
    { type: _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MainComponent.prototype, "hotels", void 0);
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"]])
], MainComponent);



/***/ }),

/***/ "./src/app/shared/pipes/format-phone.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/format-phone.pipe.ts ***!
  \***************************************************/
/*! exports provided: FormatPhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatPhonePipe", function() { return FormatPhonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormatPhonePipe = class FormatPhonePipe {
    transform(phone) {
        return String(phone).replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1 ($2) $3-$4');
    }
};
FormatPhonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'formatPhone'
    })
], FormatPhonePipe);



/***/ }),

/***/ "./src/app/shared/pipes/hotel-detail.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/hotel-detail.pipe.ts ***!
  \***************************************************/
/*! exports provided: HotelDetailPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailPipe", function() { return HotelDetailPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HotelDetailPipe = class HotelDetailPipe {
    transform(hotels, selectedHotelType) {
        if (!selectedHotelType) {
            return hotels;
        }
        return hotels.filter(hotel => hotel.type === selectedHotelType);
    }
};
HotelDetailPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hotelDetail'
    })
], HotelDetailPipe);



/***/ }),

/***/ "./src/app/shared/pipes/hotels-filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/hotels-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: HotelsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsFilterPipe", function() { return HotelsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HotelsFilterPipe = class HotelsFilterPipe {
    transform(hotels) {
        return [...new Set(hotels.map(hotel => hotel.type))];
    }
};
HotelsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hotelsFilter'
    })
], HotelsFilterPipe);

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


/***/ }),

/***/ "./src/app/shared/service/hotels.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/service/hotels.service.ts ***!
  \**************************************************/
/*! exports provided: hotels, HotelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotels", function() { return hotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsService", function() { return HotelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



const hotels = [
    {
        img: '../../../assets/hotels_img/InterContinental.5star.jpg',
        address: '111 East 48th Street',
        phone: 18004699269,
        weather: {
            title: 'InterContinental Hotel',
            icon: 'icon_url',
            water: 20,
            temperature: 30
        },
        social_info: {
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
        phone: 18006759269,
        weather: {
            title: 'Park Lane Hotel',
            icon: 'icon_url',
            water: 18,
            temperature: 19
        },
        social_info: {
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
        phone: 18004685624,
        weather: {
            title: 'Courtyard by Marriott',
            icon: 'icon_url',
            water: 27,
            temperature: 36
        },
        social_info: {
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
        phone: 18001275623,
        weather: {
            title: 'Hotel Edison Times Square',
            icon: 'icon_url',
            water: 24,
            temperature: 27
        },
        social_info: {
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
        phone: 18001575343,
        weather: {
            title: 'Courtyard New York',
            icon: 'icon_url',
            water: 14,
            temperature: 23
        },
        social_info: {
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
        phone: 18008573623,
        weather: {
            title: 'Days Hotel by Wyndham',
            icon: 'icon_url',
            water: 21,
            temperature: 29
        },
        social_info: {
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
        phone: 18001275126,
        weather: {
            title: 'Bowery Grand Hotel',
            icon: 'icon_url',
            water: 15,
            temperature: 33
        },
        social_info: {
            title: 'Bowery',
            img: '../../../assets/hotels_img/Bowery.1star.interior.jpg',
            followers: 1555,
            following: 105
        },
        type: 'one'
    },
];
let HotelsService = class HotelsService {
    constructor() {
        this.currentHotel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](hotels[0]);
    }
    getHotels() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(hotels);
    }
    getCurrentHotel() {
        return this.currentHotel.asObservable();
    }
    changeHotel(hotel) {
        this.currentHotel.next(hotel);
    }
};
HotelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HotelsService);

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


/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/hotels.service */ "./src/app/shared/service/hotels.service.ts");



let SocialComponent = class SocialComponent {
    constructor(hotelService) {
        this.hotelService = hotelService;
        this.hotelService.getCurrentHotel().subscribe(hotel => {
            this.hotel = hotel;
        });
    }
    ngOnInit() {
    }
};
SocialComponent.ctorParameters = () => [
    { type: _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"] }
];
SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: __webpack_require__(/*! raw-loader!./social.component.html */ "./node_modules/raw-loader/index.js!./src/app/social/social.component.html"),
        styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"]])
], SocialComponent);



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/hotels.service */ "./src/app/shared/service/hotels.service.ts");



let WeatherComponent = class WeatherComponent {
    constructor(hotelService) {
        this.hotelService = hotelService;
        this.hotelService.getCurrentHotel().subscribe(hotel => {
            this.hotel = hotel;
        });
    }
    ngOnInit() {
    }
};
WeatherComponent.ctorParameters = () => [
    { type: _shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"] }
];
WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html"),
        styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelsService"]])
], WeatherComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/docs/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maffy/WebstormProjects/archive/hw2-widget_2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map