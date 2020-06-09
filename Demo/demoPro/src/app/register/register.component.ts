import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }
  registerprofileForm = new FormGroup({ 
    Name: new FormControl(''),
    Username: new FormControl(''),
    Password: new FormControl('')

  })
  onRegister(){
    console.log("registered successfully")
  }
}
