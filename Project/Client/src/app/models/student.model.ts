export interface student {
    id?: number;
    firstName?: string;
    lastName?: string;
    phone1?: string;
    phone2?: string;
    email?: string;
}
export interface changeStutionRequest{
    studentId:number;
    stutionId:number;
}
export interface changeBusRequest{
    studentId:number;
    BusId:number;
}