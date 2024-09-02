import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import JSON from 'json5'
import { ApiResponse } from '../DTO\'s/model';
import {Observable} from 'rxjs'
import { environment } from '../../environments/environment';
import { Constant } from '../constant/Constant';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http : HttpClient) {
    const localdata = localStorage.getItem('HospitalData');
    if(localdata != null){
     this.id = JSON.parse(localdata);
     this.id = this.id.hospitalId
     console.log(this.id)
      }
  }
id:any
// Making method to call patients api

//  ---start---

getAllPatientsByHospitalId(): Observable<ApiResponse>{
return this.http.get<ApiResponse>(environment.api_url+Constant.API_END_POINT.GETALLPATIENTSBYID+this.id)
}

//  ---end---

// Making getAllpatients method

//  ---start---

getAllPatients(): Observable<ApiResponse>{
return this.http.get<ApiResponse>(environment.api_url+Constant.API_END_POINT.GETALLPATIENTS)
}

//  ---end---
}
