import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {student}from '../../../models/student.model';
import {StudentService}from '../../../services/student.service';
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
