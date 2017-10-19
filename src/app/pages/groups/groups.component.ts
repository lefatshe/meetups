import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../shared/service/groups.service';
import {Group} from '../../shared/models/groups';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit {

  group: Group;
  category: any
  prefferedCategory: any

  constructor(public httpService: GroupsService) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('catergoryId'));
    console.log(localStorage.getItem('catergoryName'));


    this.category = localStorage.getItem('catergoryId');
    this.prefferedCategory = localStorage.getItem('catergoryName');

    this.httpService.getGroups(this.category)
      .subscribe((data: Group) => {
        this.group = data;
        console.log(this.group);
      }, error => {
        console.log('An Error occured');
      });
  }

}
