import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { student } from '../models/student.model';
import {environment}from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  students: student[] = [
    <student>{
       id: 1,
       firstName: "chani",
       lastName: "zaks",
       phone1: "jj",
      phone2: "ffggf",
       email: "fffff@gmail.com"
     },
     <student>{
      id: 2,
       firstName: "sari",
      lastName: "zaks",
      phone1: "jj",
      phone2: "ffggf",
      email: "fffff@gmail.com"
    }
]
  constructor(private http:HttpClient) {

   }
  addStudent(s: student) {
    return this.http.post(environment.api + "/student/addStudent", { s });
  }
  getStudents(): student[] {
    if(!this.students)
    {
      this.http.get<student[]>(environment.api + "/student/getStudents").subscribe(students=>this.students=students);
    }
    return this.students;
  }
  getStudentById(id:number){
    if(!this.students){
      this.getStudents();
    }
   return this.students.find(s=>s.id==id);
  }
  updateStudent(student: student) {
   return this.http.post(environment.api+"/student/update",{student}).pipe(map((response:boolean)=>{
     return response;
   },
   (error)=>{
    return error;
   }));
   
   

   

   
  }
}
