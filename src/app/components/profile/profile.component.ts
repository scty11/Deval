import { Component, OnInit } from '@angular/core';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  img: string;
  constructor() { }

  ngOnInit() {
  }
  onUploadFinished(file: FileHolder) {
    this.img = file.src;
  }
  // tslint:disable-next-line:member-ordering
  customStyle = {
    selectButton: {
      'background-color': '#FF1654',
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
      'font-size': '15px',
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
