import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl, FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(){}
loginform = new FormGroup({
email:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required])
});

login(value:any){
console.log(value);
}
}
