import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { RegisterHospital, ApiResponse, Login } from '../DTO\'s/model';
import { environment } from '../../environments/environment';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http : HttpClient) {}

registerHospital(obj:RegisterHospital):Observable<ApiResponse>{
return this.http.post<ApiResponse>(environment.api_url+Constant.API_END_POINT.ADD_NEW_HOSPITAL,obj)
}
LoginHospital(obj:Login):Observable<ApiResponse>{
return this.http.post<ApiResponse>(environment.api_url+Constant.API_END_POINT.LOGIN,obj)
}
}
