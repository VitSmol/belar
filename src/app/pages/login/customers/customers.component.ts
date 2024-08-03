import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  // standalone: true,
  // imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.sass'
})
export class CustomersComponent {
  constructor(
    public formBuilder: FormBuilder
  ){}
  customersLoginDetails = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  })
}
