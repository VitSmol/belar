import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(
    public formBuilder: FormBuilder,
    public serv: UsersService
  ){}
createUser = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required],
    name: ['', Validators.required]
  })

  create() {
    let user = this.createUser.value
    this.serv.createUser(user).subscribe((data: any) => {
      console.log(data);
      this.createUser.reset()
      if (data.success === 1) {
        console.log(`all ok`);

      }
      // this.createUser.
    })
    console.log(this.createUser);
  }
}
