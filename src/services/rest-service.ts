import {APP_CONSTANTS} from '../constants/app-constants';
import {MyApp} from '../app/app.component';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RestService {
  private url: string;
  private headers;
  private options;
  
  

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    if (MyApp.currentUser) {
      this.headers.append('Authorization',
        'Token token=' + MyApp.currentUser['access_token']);
    }
    this.options = new RequestOptions({ headers: this.headers });
  }


  /**
   * Sets the url(end point) of the resource.
   */
  setUrl(url: string) {
    this.url = url;
  }
  
  /**
   * Lists all resources.
   */
  all(url: string = this.url, requestParams: Object, headers: Object) : Observable<Response> {
    let hasParams = Object.keys(requestParams).length;
    let params = hasParams ?
        ('?' + encodeURIComponent(JSON.stringify(requestParams))) : '';  
    return this.http.
      get(APP_CONSTANTS['BASE_URL'] + url + params, this.options);
  }
  
  
  /**
   * Creates a resource.
   */
  create(url: string = this.url, requestParams: Object, headers: Object) : Observable<Response> {
    let params = JSON.stringify(requestParams);
    return this.http.
      post(APP_CONSTANTS['BASE_URL'] + url, params, this.options);
  }
  
  /**
   * Updates a resource.
   */  
  update(url: string = this.url, requestParams: Object, headers: Object) : Observable<Response> {
    let updateUrl = APP_CONSTANTS['BASE_URL'] + url + '/' + requestParams['id'];
    let params = JSON.stringify(requestParams);
    return this.http.
      put(updateUrl, params, this.options);
  }
  
  
  /**
   * Removes a resource.
   */
  delete(url: string = this.url, requestParams: Object, headers: Object) : Observable<Response> {
    let deleteUrl = APP_CONSTANTS['BASE_URL'] + url + '/' + requestParams['id'];
    return this.http.
      delete(deleteUrl, this.options);
  }

}
