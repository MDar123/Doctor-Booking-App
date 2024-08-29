export class Patients {
    age!: number
    city!: string
    gender!: string
    mobileNo!: string
    name!: string
    patientId!: number
    hospitalName!: string
}

export class RegisterHospital{
hospitalId!: number
hospitalName!: string
hospitalAddress!: string
hospitalCity!: string
hospitalContactNo!: string
hospitalOwnerName!: string
hospitalOwnerContactNo!: string
hospitalEmailId!: string
userName!: string
password!: string
}

export interface ApiResponse {
message : string
result:boolean;
data:any
}

export class Login {
userName!: string
password!: string
}