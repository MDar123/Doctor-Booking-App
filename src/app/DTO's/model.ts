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
export class NewAppointment{
name!: string
mobileNo!: string
city!: string
age!: number
gender!: string
appointmentDate:Date =  new Date()
appointmentTime!: string
isFirstVisit!: boolean
naration!: string
hospitalId!: number
}

export class GetAppointmentById{
appointmentDate: Date = new Date()
appointmentId!: number
appointmentTime!: string
isFirstVisit!: boolean
naration!: string
name!: string
patientId!: number
mobileNo!: string
isDone!: boolean
hospitalName!:string
}

export class PatientDetails{
    patientId!: number
    name!: string
    mobileNo!: string
    city!: string
    age!: number
    gender!: string
    hospitalId!: number
}