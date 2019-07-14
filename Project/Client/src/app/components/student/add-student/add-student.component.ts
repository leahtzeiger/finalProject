import { Component, OnInit } from '@angular/core';
import { student } from '../../shared/models/student.model';
import { StudentService } from '../../shared/services/student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  currentStudent: student;
  constructor(private studentService: StudentService) {
    this.currentStudent = <student>{};
  }

  addStudent() {
    this.studentService.addStudent(this.currentStudent).subscribe(s => {
      console.log(s.valueOf)
    });
  }
  ngOnInit() {
  }

}
