import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../shared/service/category.service';
import {Catergory} from '../../shared/models/category';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  category: Catergory[]
  msgs: Message[] = [];


  constructor(private httpService: CategoryService) {
  }

  onSelect(item) {
    console.log(item);
    localStorage.setItem('catergoryId', item.id);
    localStorage.setItem('catergoryName', item.name);
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Category Saved', detail: item.name});
  }

  ngOnInit() {
    this.httpService.getCatergories()
      .subscribe((data: Catergory[]) => {
        this.category = data;
        console.log(this.category);
      }, error => {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Failed trying to make a request to server'});
      });
  }
}


