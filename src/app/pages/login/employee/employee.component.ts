import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  // standalone: true,
  // imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.sass'
})
export class EmployeeComponent {
  constructor(
    public formBuilder: FormBuilder
  ){}
  employeeLoginDetails = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  checkLogin() {
    console.log(this.employeeLoginDetails.value);

  }
}
