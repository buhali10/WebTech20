import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  template: `
<!--    <ol>-->
<!--      <li *ngFor="let day of weekdays">{{ day }}</li>-->
<!--    </ol>-->
<!--    <img src="{{ imgUrl }}" />-->
    <input (change)="showPayload($event)" type="text" />
  `,
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  /*weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];*/
  // imgUrl = 'https://www.dpunkt.de/common/images/cover_masterid/800/12400.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  showPayload(e: Event) {
    console.log(e);
  }
  }
