import { Component, OnInit } from '@angular/core';
import { NewAppointment, ApiResponse, GetAppointmentById, Login } from '../../DTO\'s/model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../Services/appointment.service';
import JSON from 'json5'
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{

ngOnInit(){
this.roleCheck();
}

constructor(private service:AppointmentService){
  const localdata = localStorage.getItem('HospitalData');
  if(localdata != null){
  this.loggedData = JSON.parse(localdata);
  this.appointmentObj.hospitalId = JSON.parse(localdata).hospitalId;
  }
}
public appointmentObj:NewAppointment = new NewAppointment();
public appointmentList:GetAppointmentById[]=[];
public loggedData:Login = new Login();

// Method to check the role 
//  ---start---

roleCheck(){
if(this.loggedData.userName == "admin@gmail.com"){
this.getAllAppointments();
}
else{
this.getAllAppointmentsByHospitalId();
}
}

//  ---end---

// Making BookAppointment Method 

//  ---start---

OnBookAppointment(value:NewAppointment){
this.service.addAppointment(this.appointmentObj).subscribe((res:ApiResponse)=>{
if(res.result){
alert('Appointment Added successfully');
this.roleCheck();
}else{
alert(res.message)
}
})
}

//  ---end---

getAllAppointmentsByHospitalId(){
this.service.getHospitalById(this.appointmentObj.hospitalId).subscribe((res:ApiResponse)=>{
this.appointmentList = res.data;
})
}

// Making getAllAppointment method for admin role

getAllAppointments(){
this.service.getAllAppointments().subscribe((res:ApiResponse)=>{
  this.appointmentList = res.data;
})
}
}
