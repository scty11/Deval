import { Component, OnInit } from '@angular/core';
import { FileHolder } from 'angular2-image-upload';
import { Upload } from '../../models/upload';
import { ProfileService } from '../../services/profile.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Profile } from '../../models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  img: Upload;
  form: FormGroup;

  constructor(private fb: FormBuilder, private proSvc: ProfileService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      personalDescription: ['']
    });
  }

  onUploadFinished(file: FileHolder) {
    this.img = new Upload(file.file);
  }

  async save({ value, valid }: { value: Profile, valid: boolean }) {
    await this.proSvc.saveProfile(this.img, value);
    this.router.navigate(['/home']);
  }
  // tslint:disable-next-line:member-ordering
  customStyle = {
    selectButton: {
      'background-color': '#247ba0',
      'border-radius': '25px',
      'color': '#fff'
    },
    clearButton: {
      'background-color': '#FFF',
      'border-radius': '25px',
      'color': '#000',
      'margin-left': '10px'
    },
    layout: {
      'background-color': 'white',
      'border-radius': '25px',
      'color': '#FFF',
      'font-size': '10px',
      'margin': '0 auto',
      'padding-top': '5px',
      'width': '70%'
    },
    previewPanel: {
      'background-color': '#fff',
      'border-radius': '0 0 25px 25px',
    }
  };
}
