import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router) {
    this.buildForm();
  }

  ngOnInit(): void {
  }
  buildForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  login() {
    let loginDTO = this.form.value;
    this.authService.login(loginDTO.username, loginDTO.password).subscribe((res) => {
      console.log(res);
      this.router.navigate(["menu"]);
    })
  }
}
