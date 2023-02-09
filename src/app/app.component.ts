// import { Component, ViewChild} from '@angular/core';
// import { NgForm } from '@angular/forms';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title='AngularLearn';


// }

import { Component } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm=false;
  users:any=[{username:"hemant",email:"jakaa",gender:"jajaj",country:"jjaja",checked:true},{username:"hemant",email:"jakaa",gender:"jajaj",country:"jjaja",checked:true},{username:"hemant",email:"jakaa",gender:"jajaj",country:"jjaja",checked:true},{username:"hemant",email:"jakaa",gender:"jajaj",country:"jjaja",checked:true}];
   constructor(private user:UsersService){
    this.user.getUser().subscribe(data=>{
           console.log(data);
           this.users=data;
    })
   }

   ShowForm(){
       this.showForm=true;
   }

   
}
