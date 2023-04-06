import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson_1_app';
  student = {
    name: 'John',
    age: 20,
    isMarried: true,
  };
  isLiked: boolean = false;
  studentNames: string[] = ['John', 'Jane', 'Bob', 'Alice', 'Doe'];
  typedValue: string = 'Jane DOe';

  readText($event: any): void {
    this.typedValue = $event.target.value;
    console.log(this.typedValue);
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
    console.log(this.isLiked);
  }
}
