
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../services/profile.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
@Injectable()
export class ProfileGuard implements CanActivate {
  /**
   *
   */
  constructor(private proSrc: ProfileService, private router: Router, public afAuth: AngularFireAuth) {
  }
  canActivate(): Observable<boolean> | boolean {
    return this.proSrc.profile.take(1).map(user => !!user)
      .do(hasProfile => {
        if (!hasProfile) {
          this.router.navigate(['/profile']);
          return false;
        } else {
          return true;
        }
      });
  }

}


