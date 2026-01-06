import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router';
import { Students } from './students/students';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Students],
  templateUrl: `./app.html`,
  styleUrl: './app.css'
})
export class App {

  titleforChild = "This is the title that I wanna pass to child component";

  showStudentDetails(name:string) {
    console.log('Student received from child component: ', name);
  }

  protected readonly title = signal('This is my app!');

  my_name = 'Harsh';

  person = {
    name: 'Harsh',
    age: 21
  };

  persons = [
    { id: 1, name: 'Harsh', age: 21 },
    { id: 2, name: 'Rohit', age: 22 },
    { id: 3, name: 'Ankit', age: 20 }
  ];

}