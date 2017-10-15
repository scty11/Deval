import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = '';

  constructor(fb: FormBuilder, private authService: AuthService, public router: Router, ) {

    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login({ value, valid }: { value: any, valid: boolean }) {
    this.authService.login(value.email, value.password)
      .then((res) => {
        // this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.router.navigate(['/account']);
      });
  }

}
