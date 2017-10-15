
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './register-validators';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild(FormGroupDirective) myForm: FormGroupDirective;
  @Output() selectedTab = new EventEmitter<number>();
  form: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['']
    }, {
        validator: PasswordValidators.passwordsShouldMatch
      });
  }

  register({ value, valid }: { value: any, valid: boolean }) {

    this.authService.register(value.email, value.password)
      .then((res) => {
        this.selectedTab.emit(0);
        this.myForm.resetForm();
        this.error = '';
      })
      .catch((err) => {
        this.error = err.message;
      });
  }
}
