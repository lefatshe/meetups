import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {routerConfig} from './router.config';
import {CategoryService} from './shared/service/category.service';
import {HTTPUtility} from './shared/service/httpUtility';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { GroupsComponent } from './pages/groups/groups.component';
import {GroupsService} from './shared/service/groups.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import {GrowlModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GroupsComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    GrowlModule,
    PanelModule,
    HTTPUtility,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [CategoryService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
