import { Injectable } from '@angular/core';

@Injectable()
export class TimelineService {
  public allEvents = [
    {
      name: "Cladwell",
      position: "Product Developer",
      time: "August 2016 – October 2014",
      desc: `<p>Created and updated Cladwell’s consumer focus web applications to work with existing products, optimized for mobile usage, maintained a modular structure and UI library to support future features and improvements. Used AngularJS and React frameworks to connect with Node.js processes utilizing MySQL and NoSQL data management. Turned Cladwell’s prototypes and designs into responsive applications with full-stack flexibility.</p>
      <p>Project managed 20 sprints using a 10-day agile process, outlined product objectives, and facilitated team alignment and product direction meetings. Collaborated with designers on over 100 new product features, more than 250 UI and UX improvements with on-time, on-spec delivery.</p>
      <p>Worked directly with marketing managers to aid with qualitative testing of marketing initiatives and product improvements. Integrated multiple third-party analytic products and generated reports to track and aggregate data from overall traffic, acquisition, and user behavior in order to influence brand and product direction during weekly meetings with all departments.</p>
      <p>Directly contributed to growing user-base; 250k free accounts and 15k paid subscriptions generating an ARR projected over $1MM in 2016.</p>
      <p>Worked with an off-site initiative with Macy's in 2015 and participated in Batch 17 of 500 Startups in Mountain View, California.</p>`,
      preview_image: null
    },
    {
      name: "CoupSmart",
      position: "Creative Director / Front-End Developer",
      time: "September 2014 – June 2013",
      desc: "Led a team of three developers and two designers, in conjunction with sales and account teams, to deliver customized client marketing campaigns within 48 hours. Created UI for internal, consumer, and B2B customer web applications, including proprietary Facebook promotional software and e-commerce gift shops. Optimized development through strategy, workflow, and component libraries utilizing the latest web technologies. Oversaw a major market pivot and led the design and development of 4 new products servicing a consumer-base of 100,000+ active users. Directly interfaced with over 100 CPG clients to deliver digital marketing campaigns based on their needs and expected results.",
      preview_image: null
    },
    {
      name: "CoupSmart",
      position: "Design Team Captain / Front-End Developer",
      time: "June 2013 - January 2012",
      desc: "Managed and coordinated workflow for 5 employees, created strategic plans for product development and brand cohesiveness. Held weekly team meetings to incorporate new design ideas and to overview new UI improvements, while contributing with coding product interfaces using the latest HTML/CSS standards.",
      preview_image: null
    },
    {
      name: "CoupSmart",
      position: "Designer / Front-End Developer",
      time: "December 2011 - September 2010",
      desc: "Expanded brand direction and led new product concepts, wireframing, and designs under business model change. Conducted app and site usability testing and created development plan to increase web and interface optimization. Create application interfaces using HTML/CSS, Javascript, and PHP languages.",
      preview_image: null
    },
    {
      name: "University of Cincinnati",
      position: "B.S. in Design, Digital Design",
      time: "June 2011 - September 2006",
      desc: "Graduated from the College of Design, Art, Architecture, and Planning with an emphasis in Digital Design. Internships and coursework focused on traditional graphic, multimedia interfaces, user experience design, and data visualization through digital mediums.",
      preview_image: null
    }
  ];
  getEvents() {
    return this.allEvents;
  }
}
