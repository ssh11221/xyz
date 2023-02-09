// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
  getUser(){
      let api="http://localhost:8080";
      return this.http.get(api);
  }

  addUser(user:any){
     let  api="http://localhost:8080";
     return this.http.post(api,user);

  }
  
}