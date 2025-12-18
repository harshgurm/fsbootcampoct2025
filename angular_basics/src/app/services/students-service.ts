import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  
  students = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 23 },
    { id: 4, name: 'Caden', age: 25 },
    { id: 5, name: 'Test', age: 21 },
  ];

  getStudents() {
    return this.students;
  }




}
