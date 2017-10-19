import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HTTPUtility} from './httpUtility';
import {Observable} from 'rxjs/Observable';
import {Catergory} from '../models/category';
import 'rxjs/add/operator/map';
import {Group} from '../models/groups';

@Injectable()
export class GroupsService extends HTTPUtility {

  constructor(http: Http) {
    super(http);
  }

  getGroups(category): Observable<Group> {
    return this.httpGet('https://api.meetup.com/find/groups?key=3c66274b1a1a4b52144a286477772c&sign=true&location=johnnasburg&category=' + category)
      .map((data) => data as Group);
  }

}
