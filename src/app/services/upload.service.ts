import { Injectable } from '@angular/core';
import { Upload } from '../models/upload';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  constructor() { }
  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`uploads/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        debugger;
        // upload success
        // upload.url = uploadTask.snapshot.downloadURL;
        // upload.name = upload.file.name;
        // this.saveFileData(upload);
      }
    );
  }
}
