import { Component, OnInit } from '@angular/core';
import { TimelineService } from "../shared/services/timeline";

@Component({
  selector: 'timeline',
  providers: [TimelineService],
  styleUrls: ['../shared/scss/timeline.scss'],
  template: `
    <h2 class="section-header">Experience</h2>
    <div class="events">
      <div *ngFor="let exp of allEvents" class="event">
        <h3>{{exp.name}}</h3>
        <p>{{exp.position}}</p>
        <p>{{exp.time}}</p>
        <p>{{exp.desc}}</p>
      </div>
    </div>
  `
})

export class TimelineComponent implements OnInit {
  constructor(private timelineService: TimelineService){};
  public allEvents;
  ngOnInit() {
    this.allEvents = this.timelineService.getEvents();
  }
}
