import {Route} from '@angular/router';
import {CategoriesComponent} from './pages/categories/categories.component';
import {GroupsComponent} from './pages/groups/groups.component';


export const routerConfig: Route[] = [
  {
    path: 'category',
    component: CategoriesComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'category'
  }
]
