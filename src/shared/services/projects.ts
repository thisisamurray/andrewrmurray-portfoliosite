import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  public allProjects = {
    cladwell_giftFinder: {
      name: "Men\'s Gift Finder",
      skills: ["AngularJS 1", "HTML5", "CSS3", "noSQL"],
      time: "",
      owner: "Cladwell",
      ele: "Interactive Angular Web App to recommend Christmas Gifts.",
      desc: "Tasked with creating a interactive web application to educate and enable women to pair down their total amount of clothing, I aided the Cladwell executive team with outlining objectives, guiding UX, and managed project timelines while developing the front-end interface. Since this was a prototype of a new product concept, the code was developed in mind of restructuring and moving components. The development team turned to using React.js with this project first due it\'s modular nature.",
      preview_image: "./src/shared/img/projects/giftfinder0.png",
      images: [
        {title: "", desc: "", url: "./src/shared/img/projects/giftfinder1.png"},
        {title: "", desc: "", url: "./src/shared/img/projects/giftfinder2.png"},
        {title: "", desc: "", url: "./src/shared/img/projects/giftfinder3.png"}
      ],
    },
    cladwell_capsules: {
      name: "Women's Capsules",
      skills: ["ReactJS", "HTML5", "CSS3", "MySQL"],
      time: "",
      owner: "Cladwell",
      ele: "React Web App to help women manage their style and clothing.",
      desc: "Tasked with creating a interactive web application to educate and enable women to pair down their total amount of clothing, I aided the Cladwell executive team with outlining objectives, guiding UX, and managed project timelines while developing the front-end interface. Since this was a prototype of a new product concept, the code was developed in mind of restructuring and moving components. The development team turned to using React.js with this project first due it\'s modular nature.",
      preview_image: "./src/shared/img/projects/capsules0.png",
      images: [
        {
          title: "Prototyping",
          desc: "Color coded to show different phases of implementation, this low fidelity prototype was created to ensure all team members understood pending application updates and help propel the design team.",
          url: "./src/shared/img/projects/capsules1.png"
        },
        {
          title: "Capsule Creator",
          desc: "The first of a two part process in the app, the Capsule Creator helped users identify and customize their capsule to best fit their life and style. Each part of the Capsules application would dynamically rearrange in order to best fit the device's screen.",
          url: "./src/shared/img/projects/capsules2.png"
        },
      ],
    },
    cladwell_macysIdeaLab: {
      name: "Macy\'s Idea Lab",
      skills: [],
      time: "",
      owner: "Cladwell",
      ele: "Collaboration with Macys.com and Cladwell to intergrate products.",
      desc: "I was sent to work with a prototyping team at Macys.com in San Francisco to help them with developing a small web application using Cladwell\'s skillsnology to promote Macy\'s merchandise. Helped onboard the Macys.com team with the specific project objectives and target audience, played a large role in defining the user experience, and facilitated communication between both companies to create an MVP within two weeks. *All designs are property of Macys.com",
      preview_image: "./src/shared/img/projects/macys0.jpg",
      images: [
        {title: "", desc: "", url: null}
      ],
    },
    coupsmart_smartDeals: {
      name: "Coupons on Facebook",
      skills: ["PHP", "JQuery", "MySQL", "CSS3"],
      time: "",
      owner: "Cladwell",
      ele: "Digital marketing tool to deliver printable coupons to Facebook Fans.",
      desc: "Dubbed \"Smart Deals\", this app was created for CoupSmart for their clients to offer coupons and other printed promotional material right on their Facebook page. The app focuses on creating viral deals, encouraging or requiring Facebook users to like the page or share with friends before they are able to print. Currently, the third version of the app has been very popular, with more than 500,000+ active users in 2012.\r\n My role in this app was comprehensive, from wire-framing and creating concepts for the initial idea to the development of the user interface and front-end controls. Also, I lead further refinement and development over the additional iterations.",
      preview_image: "./src/shared/img/projects/smartdeals0.jpg",
      images: [
        {title: "", desc: "", url: "./src/shared/img/projects/smartdeals1.jpg"},
        {title: "", desc: "", url: "./src/shared/img/projects/smartdeals2.jpg"}
      ],
    },
    coupsmart_actNaturalTour: {
      name: "Act Natural Tour",
      skills: ["Photoshop"],
      time: "",
      owner: "CoupSmart",
      ele: "Quick creation of assets and ticket distribution of nation-wide concert series.",
      desc: "Natural Light came to CoupSmart with the need to socially promote their Act Natural Tour, a marketing campaign that had several stops around the country. Using CoupSmart's Mobile and Facebook Coupon Apps, our team came up with the idea to require Fans to share with their friends to see the dates and times of the tour stops. Using assets from a previous advertisement, we created a unique social marketing campaign within 36 hours.\r\n While managing the overall design direction of this campaign, I also modified their logo to create a identity for the tour and created the mobile aspect of this campaign.",
      preview_image: "./src/shared/img/projects/actnatural0.jpg",
      images: [
        {title: "", desc: "", url: "./src/shared/img/projects/actnatural1.jpg"},
        {title: "", desc: "", url: "./src/shared/img/projects/actnatural2.jpg"},
        {title: "", desc: "", url: "./src/shared/img/projects/actnatural3.jpg"}
      ],
    },
    coupsmart_clientProposals: {
      name: "Client Proposals",
      skills: ["Photoshop"],
      time: "",
      owner: "CoupSmart",
      ele: "Quick turn-around asset package for client sales pitches.",
      desc: "CoupSmart's Sales Team needed a way to better show potential clients how much customization the software could handle. I would create mock–ups used in proposals, from 48 hours to a week in advance, using limited branding resources that gave the potential client an idea on what their Social Marketing Campaigns could look like.\r\n With only the name of the client and a rough outline on what kind of deals or products they would like to showcase, I would develop static mock–ups that showed that client's branding that also could be transferred exactly to become a live product.",
      preview_image: "./src/shared/img/projects/clientproposal0.jpg",
      images: [
        {title: "", desc: "", url: "./src/shared/img/projects/clientproposal1.jpg"},
        {title: "", desc: "", url: "./src/shared/img/projects/clientproposal2.jpg"},
        {title: "", desc: "", url: "./src/shared/img/projects/clientproposal3.jpg"}
      ],
    },
  }
  public hiddenProjects = {

    cladwell_outfits: {
      name: "Outfits Feature Update - Spring 2016",
      skills: [],
      time: "",
      owner: "",
      ele: "",
      desc: "Using a 7-day agile sprint process, this product update was one of may to gauge user\'s interest in different improvements. This interface focused on allowing users to discover and save outfits that they had the clothing for while also allowing them to upload, tag, and share their own outfits to the community. I was able to accomplish such a small development schedule due to the component library I created, sharing multiple interfaces between separate improvements.",
      preview_image: null,
      images: [],
    },
    cladwell_guidebook: {
      name: "Cladwell\'s Capsule Guidebook - Spring 2016",
      ele: "",
      skills: [],
      time: "",
      owner: "",
      desc: "A feature to offer Cladwell\'s female Capsules users a way to learn more about the capsuling process and to provide further insight and tips on how to source new clothing items. The module was engineered to automatically index and update the interface based on a file system using Markdown, enabling the marketing to update content on their own schedule without needing resources from development. Created with React JS.",
      preview_image: null,
      images: [],
    },
    cladwell_capsuleCreator: {
      name: "Cladwell\'s Capsule Creation Wizard - Spring 2016",
      ele: "",
      skills: [],
      time: "",
      owner: "",
      desc: "A four step wizard to allow Capsule users to create a new wardrobe to maintain the benefits of an interchangeable wardrobe across multiple locations or seasons. Users would add clothing items needed based off of the events in their lives, then choose a color palette and style that they personally align to. This survey then would send it\'s payload of answers to Cladwell\'s Capsule Generation API and create a new wardrobe accessible to the user. Created with React JS.",
      preview_image: null,
      images: [],
    },
    example: {
      name: "",
      skills: ["ReactJS", "HTML5", "AngularJS 1", "PHP", "JQuery", "MySQL", "noSQL", "CSS3"],
      time: "",
      owner: "",
      ele: "",
      desc: "",
      preview_image: "./src/shared/img/projects/example0.jpg",
      images: [
        {title: "", desc: "", url: "./src/shared/img/projects/example1.jpg"},
        {title: "", desc: "", url: "./src/shared/img/projects/example2.jpg"}
      ],
    },
  }
  getProjects() {
    return this.allProjects;
  }
  getProject(UID: any) {
    return this.allProjects[UID];
  }
}
