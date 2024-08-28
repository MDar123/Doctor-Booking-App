import { Injectable } from '@angular/core';
import { User } from '../Dto/User';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient,private httpErrorService: HttpErrorHandlerService) {}
  baseUrl  = 'http://canitudeapi-test.us-east-1.elasticbeanstalk.com/api/'                                                                                               
  // Making Register Api call from swagger

// register(value:User){
// return this.http.post<User>(`${this.baseUrl}UserAccount/Register`,value);
// }

SendEmailVerificationCode(email: string) {
  debugger
  return this.http
    .post( this.baseUrl + `UserAccount/SendEmailVerificationCode?email=${email}`, httpOptions)
    .pipe(catchError(this.httpErrorService.handleHttpError));
}
}
