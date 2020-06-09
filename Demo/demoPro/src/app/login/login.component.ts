import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(public router: Router) { }
  userprofileForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl('')
  })

 
  loginUser() {
    console.log(this.userprofileForm.value);
}
myClickFunction() {
  this.router.navigate(['./register']);
 }

}
