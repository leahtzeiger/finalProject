import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{student}from'../../../models/student.model';
import{StudentService}from'../../../services/student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:student[]=[];
  constructor(private studentsService: StudentService,private Router:Router) {
   this.students=this.studentsService.getStudents();
  }
 

  ngOnInit() {
  }

}
