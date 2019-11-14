import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Penthouse',
      'We in this bitch.',
      'https://thespaces.com/wp-content/uploads/2016/06/Gucci-sisters-Olympic-Tower-penthouse-3-FT.jpg',
      500
    ),
    new Place(
      'p2',
      'Versailles',
      'Niggas in Paris',
      'https://cdn.shopify.com/s/files/1/1746/3259/products/shutterstock_533937232.jpg?v=1521626530',
      300000
    ),
    new Place(
      'p3',
      'Sunseeker Predator 108',
      'Optimal amount of boat',
      'https://www.boatbookings.com/imgcache/big_double_d_-_suns-29661524053_976957.jpg',
      6000
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
