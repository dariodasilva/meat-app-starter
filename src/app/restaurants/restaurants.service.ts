import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Http} from '@angular/http';

import { Restaurant } from "./restaurant/restaurant.model";

import {MEAT_API} from 'app/app.api';

import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {

    
    
   constructor(private http: Http){}

   restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.errorHandler)}
  
}