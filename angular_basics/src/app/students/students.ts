import { Component } from '@angular/core';
import { StudentsService } from '../services/students-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Test } from '../test';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-students',
  imports: [FormsModule, CommonModule, Test],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  users = ["John", "Jane", "Doe", "Smith"];

  name = 'Harsh';

  ImgUrl = 'https://images-na.ssl-images-amazon.com/images/G/15/Events/2025/Collections/WinterFavourites/CA_RE_EN_WF_NOV_Desk_Quad_186x116_Electronics._SY116_CB798629433_.jpg';

  students:{name: string, age: number, id:number}[] = [];

  studentId = 0

  firstName = '';

  eventVal = ''

  ClassRed = 'red'
  ClassGreen = 'green'
  // assign boolean value
  hasErrors = true;
  NoErrors = false;


  StyleRedColor = 'red';

  constructor(private studentsService: StudentsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      // this.firstName = params['firstName'] || 'Guest';
      this.studentId = Number(params.get('id')) || 0;
    });
    this.students = this.studentsService.getStudents();
  }
    

  showStudentDetails(name:any) {
    console.log('Student ', name, ' clicked!');
  }

  countStudents() {
    return this.students.length;
  }
// method to toggle the hasErrors and NoErrors values
// it basically switches the values between true and false
  toggleButton(){
    this.hasErrors = !this.hasErrors;
    this.NoErrors = !this.NoErrors;
  }

}
