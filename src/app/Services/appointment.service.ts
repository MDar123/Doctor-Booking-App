import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewAppointment, ApiResponse } from '../DTO\'s/model';
import {Observable} from 'rxjs'
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

constructor(private http :HttpClient) {}

// Making neappointment method to call api 

//  ---start---

addAppointment(obj:NewAppointment):Observable<ApiResponse>{
return this.http.post<ApiResponse>(environment.api_url+Constant.API_END_POINT.ADD_NEW_APPOINTMENT,obj)
}

//  ---end---

getHospitalById(id:number):Observable<ApiResponse>{
return this.http.get<ApiResponse>(environment.api_url+Constant.API_END_POINT.GET_HOSPITAL_BY_ID+id);
}

getAllAppointments():Observable<ApiResponse>{
  return this.http.get<ApiResponse>(environment.api_url+Constant.API_END_POINT.GET_ALL_APPOINTMENTS);
  }
}
