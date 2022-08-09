import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isRecording: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
