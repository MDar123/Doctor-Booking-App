import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private fb : FormBuilder){}

form = this.fb.group({
email:['',[Validators.required]],
password:['',[Validators.required]]
});

login(){
console.log('Congrats! You are LOgged In');
}
}
