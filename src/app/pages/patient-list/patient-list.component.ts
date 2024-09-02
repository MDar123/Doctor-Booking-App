import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../Services/patients.service';
import { PatientDetails, ApiResponse, Login } from '../../DTO\'s/model';
import JSON from 'json5'
@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit{
constructor(private service : PatientsService){
  const localdata = localStorage.getItem('HospitalData');
  if(localdata != null){
  this.loggedData = JSON.parse(localdata);
  }
}
ngOnInit(){
this.roleCheck();
}

roleCheck(){
  if(this.loggedData.userName == "admin@gmail.com"){
  this.getAllPateints();
  }
  else{
  this.getPatientsByID();
  }
  }
patientList:PatientDetails[]=[];
public loggedData:Login = new Login();
getPatientsByID(){
this.service.getAllPatientsByHospitalId().subscribe((res:ApiResponse)=>{
this.patientList = res.data
})
}

// Making all patients method 

//  ---start---

getAllPateints(){
this.service.getAllPatients().subscribe((res:ApiResponse)=>{
this.patientList = res.data
})
}

//  ---end---
}
