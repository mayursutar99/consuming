import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowdataService {
    constructor(private httpClient: HttpClient) { 

    }
    userDetails(){
      return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
    }
}
