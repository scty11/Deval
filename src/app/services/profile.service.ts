import { Injectable } from '@angular/core';
import { Upload } from '../models/upload';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Profile } from '../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class ProfileService {
  userId: string;
  profile: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private afDb: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
    this.getProfile();
  }

  saveProfileWithImage(upload: Upload, profile: Profile) {
    return new Promise((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.userId}/${upload.file.name}`).put(upload.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // upload in progress
        },
        (error) => {
          // upload failed
          console.log(error);
          reject(error);
        },
        () => {
          // upload success
          profile.profilePicture = uploadTask.snapshot.downloadURL;
          this.saveProfile(profile).then(() => {
            resolve();
          });
        }
      );
    });

  }

  public saveProfile(profile: Profile) {
    const itemRef = this.afDb.object('profile/' + this.userId);
    return itemRef.set(profile);
  }

  getProfile() {
    this.profile = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afDb.object('profile/' + user.uid).valueChanges();

      } else {
        return Observable.of(null);
      }
    });
  }

}
