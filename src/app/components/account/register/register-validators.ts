import { AbstractControl } from '@angular/forms';
export class PasswordValidators {

  static passwordsShouldMatch(control: AbstractControl) {
    const newPassword = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword && confirmPassword) {

      if (newPassword.value !== confirmPassword.value) {
        return { passwordsShouldMatch: true };
      }
    }
    return false;
  }
}
