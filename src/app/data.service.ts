import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  register :any;

  constructor(public http : HttpClient) { }
  regData(value){
    console.log(value);
    return this.http.post('http://oswqa.onestopweddings.in/api/v1/osw/user/register',value).toPromise().
    then((data) => {
      resolve(data);
    })
  }
}
