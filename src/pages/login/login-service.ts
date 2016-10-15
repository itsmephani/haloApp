import {APP_CONSTANTS} from '../../constants/app-constants';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }
  
  login(requestParams: Object) : Observable<Response> {
    return this.callAPI('api/sessions', requestParams);
  }

  signUp(requestParams: Object) : Observable<Response> {
    return this.callAPI('api/registrations', requestParams);
  }
  
  callAPI(url, requestParams) : Observable<Response> {
    let body = JSON.stringify(requestParams);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.
      post(APP_CONSTANTS['BASE_URL'] + url, body, options);
  }

}