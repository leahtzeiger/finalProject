import { Component, OnInit,Input } from '@angular/core';
import { student } from 'src/app/shared/models/student.model';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  constructor(private activeRoute:ActivatedRoute,private studentService:StudentService) { 
  }
  id:number;
CurrentStudent:student;
  ngOnInit() {
    this.activeRoute.params.subscribe(p => {
      this.id = p['id'] || '';
      if(this.id){
        this.CurrentStudent = this.studentService.getStudentById(this.id);
      }

    })
  }

}
