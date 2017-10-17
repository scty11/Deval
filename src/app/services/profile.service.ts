import { Injectable } from '@angular/core';
import { Upload } from '../models/upload';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Profile } from '../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ProfileService {
  userId: string;

  constructor(private afAuth: AngularFireAuth, private afDb: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  saveProfile(upload: Upload, profile: Profile) {
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
          this.updateProfile(profile).then(() => {
            resolve();
          });
        }
      );
    });

  }

  public updateProfile(profile: Profile) {
    const itemRef = this.afDb.object('profile/' + this.userId);
    return itemRef.set(profile);
  }
}
