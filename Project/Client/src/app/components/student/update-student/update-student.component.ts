import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/shared/models/student.model';
import { StudentService } from '../../shared/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentId:number;
  currentStudent:student;
  constructor(private StudentService:StudentService,private router:ActivatedRoute) { }

  ngOnInit() {
this.router.params.subscribe(s=>{
this.studentId= s['id']||'';
if(this.studentId)
this.StudentService.getStudentById(this.studentId);
});
  }
  updateStudent(){
   return this.StudentService.updateStudent(this.currentStudent);
  }
}
