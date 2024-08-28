import { Injectable } from '@angular/core';
import { User } from '../Dto/User';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  tempSignUpObj!: User
  otpCode!: string;
  constructor() { }
}
