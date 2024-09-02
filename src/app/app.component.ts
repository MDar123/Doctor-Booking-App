import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Observable,Subscription} from 'rxjs'
import { Patients, Login, ApiResponse, RegisterHospital } from './DTO\'s/model';
import { HospitalService } from './Services/hospital.service';
import JSON from 'json5';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = 'Doctor Appointment App';
public loginObj:Login = new Login();
private subscription : Subscription[] = [];
hospitaldetails: RegisterHospital = new RegisterHospital();

constructor(private service : HospitalService,private route : Router){
const localdata = localStorage.getItem('HospitalData');
if(localdata != null){
this.hospitaldetails = JSON.parse(localdata);
}
} 
ngOnInit(){
}
// Making method to close login modal
//  ---start---
// OncloseModal(){
// const modal = document.getElementById('loginModal');
// if(modal!=null){
// modal.style.display = 'none';
// }
// }
//  ---end---
// Making Login Method

//  ---start---

Onlogin(value:Login){
if(!(value.password == undefined && value.userName == undefined)){
  this.subscription.push(
    this.service.LoginHospital(this.loginObj).subscribe((res:ApiResponse)=>{
    if(res.result){
    this.hospitaldetails = res.data;
    localStorage.setItem('HospitalData',JSON.stringify(res.data));
    this.route.navigateByUrl('appointment');
    }else{
    alert(res.message)
    }
    },(error:any) =>{
      alert(JSON.stringify(error))
      }
    ))
}
else{
alert('Please Enter the Credentials')
}
}

//  ---End---

// Making Logout Method

//  ---start---

onLogout(){
localStorage.removeItem('HospitalData');
this.hospitaldetails = new RegisterHospital();
this.route.navigateByUrl('home');
}

//  ---end---
}