import { Component, OnInit } from '@angular/core';
import { TimelineService } from "../shared/services/timeline";

@Component({
  selector: 'timeline',
  providers: [TimelineService],
  styleUrls: ['../shared/scss/timeline.scss'],
  template: `
    <h2 class="section-header">Experience</h2>
    <div *ngFor="let place of eventsByNameKeys" class="events">
      <h3>{{place}}</h3>
      <div *ngFor="let exp of eventsByName[place]" class="event">
        <h4>{{exp.position}}</h4>
        <h5>{{exp.time}}</h5>
        <div [innerHTML]="exp.desc"></div>
      </div>
    </div>
  `
})

export class TimelineComponent implements OnInit {
  constructor(private timelineService: TimelineService){};
  public allEvents;
  public eventsByName = new Object;
  public eventsByNameKeys = new Array;
  ngOnInit() {
    let timelineEvents = this.timelineService.getEvents();
    timelineEvents.forEach(event => {
      if (this.eventsByName[event.name] === undefined) {
        this.eventsByName[event.name] = new Array();
        this.eventsByNameKeys.push(event.name);
        this.eventsByName[event.name].push(event);
      } else {
        this.eventsByName[event.name].push(event);
      }
    });

  }
}
