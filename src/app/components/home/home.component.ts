import { Component, OnInit } from '@angular/core';
import { transition, trigger, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [trigger('listAnimation', [
    transition('* => *', [
      query('mat-card', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('1s', style({ opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ])]
})
export class HomeComponent implements OnInit {
  feed = [];
  // tslint:disable-next-line:max-line-length
  editorContent: string;
  options: Object = {
    placeholderText: 'Deval your day!...',
    toolbarButtons: ['bold', 'italic', 'underline', 'emoticons']
  };

  constructor() {
  }

  ngOnInit() {

  }

  add() {
    if (!this.editorContent === undefined
      || this.editorContent.length > 0) {

      this.feed.push(this.editorContent);
    }

  }

}
