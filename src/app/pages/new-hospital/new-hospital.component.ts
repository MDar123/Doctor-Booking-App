import { Component, OnDestroy } from '@angular/core';
import { RegisterHospital, ApiResponse } from '../../DTO\'s/model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../Services/hospital.service';
import JSON from 'json5';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent implements OnDestroy{
constructor(private hospital : HospitalService){

}

public hospitalObj:RegisterHospital = new RegisterHospital();
private subscription : Subscription[] = [];
// Making Method to register new hospital using service

//  ---start---

onRegister(){
  this.subscription.push(
    this.hospital.registerHospital(this.hospitalObj).subscribe((res:ApiResponse)=>{
      if(res.result){
      alert('Hospital Registration Successful');
      }else{
        alert(res.message);
      }
      },(error:any) =>{
      alert(JSON.stringify(error))
      })
  )
}

//  ---end---

ngOnDestroy(){
  // this.subscription.unsubscribe();
}
}
