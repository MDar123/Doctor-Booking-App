import { Component,OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from './Services/api-service.service';
import { User, VerifyOtpDto } from './Dto/User';
import {HttpResError} from './Dto/http-response-error.model'
import { SignUpService } from './Services/sign-up.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirebaseWithAngular';
  container!: HTMLElement;
  registerBtn!: HTMLElement;
  loginBtn!: HTMLElement;

  constructor(private elRef: ElementRef,private service : ApiServiceService,private signUpService: SignUpService) { }
  userSignUp = new User();
  verifyCode!: string;
  verifyOtpDto = new VerifyOtpDto();
  isverificationCodeSend = false;
  code1!: string;
  code2!: string;
  code3!: string;
  code4!: string;
  code5!: string;
  code6!: string;
  ngOnInit() {
    this.container = this.elRef.nativeElement.querySelector('#container');
    this.registerBtn = this.elRef.nativeElement.querySelector('#register');
    this.loginBtn = this.elRef.nativeElement.querySelector('#login');

    this.registerBtn.addEventListener('click', () => {
      this.container.classList.add("active");
    });

    this.loginBtn.addEventListener('click', () => {
      this.container.classList.remove("active");
    });
  }
    // Making Email Verification On SignUp form 

//  ---Start---
resetCodeFields() {
  this.code1 = '';
  this.code2 = '';
  this.code3 = '';
  this.code4 = '';
  this.code5 = '';
  this.code6 = '';
}
  sendEmailVerificationCode(){
    debugger
    // this.verifyOtpDto = new VerifyOtpDto();
    // this.verifyCode = "";
    // this.resetCodeFields();


    this.service.SendEmailVerificationCode(this.userSignUp.email).subscribe(
      (res: any)=>{
        this.verifyCode = res.code;
        console.log('Verification Code Sent',res.code)
        // this.verifyOtpDto.email = this.userSignUp.email;
        // this.isverificationCodeSend = true;
        
        // this.signUpService.otpCode = this.verifyCode
        // this.signUpService.tempSignUpObj = this.userSignUp

      },
      (err: HttpResError) => {

        console.log('Error while sending verification code.');
      }
    );
  }



//  ---End---
}