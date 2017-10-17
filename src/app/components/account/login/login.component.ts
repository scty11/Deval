import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formValid: boolean;
  error = '';

  constructor(private fb: FormBuilder, private authService: AuthService, public router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login({ value, valid }: { value: any, valid: boolean }) {
    if (valid) {
      this.authService.login(value.email, value.password)
        .then((res) => {
          this.router.navigate(['/home']);
        })
        .catch((err) => {
          this.router.navigate(['/account']);
          this.snackBar.open('Oh', 'Email or password are incorrect' , {
            duration: 2000,
          });
        });
    } else {
      this.snackBar.open('Oops!', 'Please check what you\'ve entered' , {
        duration: 2000,
      });
    }
  }

}
