import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/shared/models/student.model';
import { StudentService } from '../../shared/services/student.service';
import { Router } from '@angular/router';

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
