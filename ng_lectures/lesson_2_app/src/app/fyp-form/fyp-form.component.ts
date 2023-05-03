import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fyp-form',
  templateUrl: './fyp-form.component.html',
  styleUrls: ['./fyp-form.component.css']
})
export class FypFormComponent implements OnInit {

  defaultStudentIdentifiers: number[] = [1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(val: any){
    console.log(val);
  }

  log(val: any){
    console.log(val);
  }
}
