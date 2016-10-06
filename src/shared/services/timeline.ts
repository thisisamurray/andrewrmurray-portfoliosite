import { Injectable } from '@angular/core';

@Injectable()
export class TimelineService {
  public allEvents = [
    {
      location: "University of Cincinnati",
      position: null,
      time: null,
      desc: null,
      preview_image: null
    },
    {
      name: "CoupSmart",
      position: null,
      time: null,
      desc: null,
      preview_image: null
    },
    {
      name: "CoupSmart",
      position: null,
      time: null,
      desc: null,
      preview_image: null
    },
    {
      name: "Cladwell",
      position: null,
      time: null,
      desc: null,
      preview_image: null
    }
  ];
  getEvents() {
    return this.allEvents;
  }
}
