import {Response, Http, Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {Injectable, NgModule} from '@angular/core';
import {Observable} from "rxjs/Observable";

@NgModule()
export class HTTPUtility {
  constructor(private http: Http) {
  }


  httpGet(url: string): Observable<any> {
    return this.http.get(url).map((res: Response) => {
      return res.json();
    }, this.handleError);
  }

  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    const serverError = error.json();
    let modelStateErrors: string;

    if (!serverError.type) {
      console.log(serverError);
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }

    modelStateErrors = modelStateErrors === '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }
}





