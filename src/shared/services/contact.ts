import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
  constructor(private http: Http) { }
  private contactUrl = "https://armurrayportfolio.stamplayapp.com/api/webhook/v1/demo/catch";
  private verifyUrl = "https://armurrayportfolio.stamplayapp.com/api/codeblock/v1/run/confirmcaptcharesponse";
  sendMessage(payload) {
    let data = JSON.stringify(payload);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.contactUrl, data, options)
      .map(res => res.json());
  };
  verifyCaptcha(payload) {
    let data = JSON.stringify({'token': payload});
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.verifyUrl, data, options)
      .map(res => res.json());
  };
}
