import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private service  :ApiServiceService){}

// register(value:any){
// this.service.register(value).subscribe( (res:any)=>{
// console.log(res);
// })
// }
}
