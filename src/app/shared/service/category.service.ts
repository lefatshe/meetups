import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HTTPUtility} from './httpUtility';
import {Observable} from 'rxjs/Observable';
import {Catergory} from '../models/category';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService extends HTTPUtility {

  constructor(http: Http) {
    super(http);
  }

  getCatergories(): Observable<Catergory[]> {
    return this.httpGet('https://api.meetup.com/2/categories?key=3c66274b1a1a4b52144a286477772c&sign=true')
      .map((data) => data.results as Catergory[]);
  }

}

