export class User{
firstName!: string
lastName!: string
email!: string
password!: string
userType!: 1
}
export class VerifyOtpDto {
code!: string;
email!:string;
}