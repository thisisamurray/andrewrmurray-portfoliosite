import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  public allProjects = {
    cladwell_giftFinder: {
      name: "Men\'s Gift Finder",
      time: "",
      owner: "",
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
      name: "Capsules Web App",
      time: "",
      owner: "",
      ele: "React Web App to help women manage their style and clothing.",
      desc: "Tasked with creating a interactive web application to educate and enable women to pair down their total amount of clothing, I aided the Cladwell executive team with outlining objectives, guiding UX, and managed project timelines while developing the front-end interface. Since this was a prototype of a new product concept, the code was developed in mind of restructuring and moving components. The development team turned to using React.js with this project first due it\'s modular nature.",
      preview_image: "./src/shared/img/projects/capsules0.png",
      images: [
        {title: "Prototyping", desc: "Color coded to show different phases of implementation, this low fidelity prototype was created to ensure all team members understood pending application updates and help propel the design team.", url: "./src/shared/img/projects/capsules1.png"}
      ],
    },
    cladwell_macysIdeaLab: {
      name: "Macy\'s Idea Lab",
      time: "",
      owner: "",
      ele: "Collaboration with Macys.com and Cladwell to intergrate products.",
      desc: "I was sent to work with a prototyping team at Macys.com in San Francisco to help them with developing a small web application using Cladwell\'s technology to promote Macy\'s merchandise. Helped onboard the Macys.com team with the specific project objectives and target audience, played a large role in defining the user experience, and facilitated communication between both companies to create an MVP within two weeks. *All designs are property of Macys.com",
      preview_image: "./src/shared/img/projects/macys0.jpg",
      images: [
        {title: "", desc: "", url: null}
      ],
    },
  }
  public hiddenProjects = {

    cladwell_outfits: {
      name: "Outfits Feature Update - Spring 2016",
      ele: "",
      desc: "Using a 7-day agile sprint process, this product update was one of may to gauge user\'s interest in different improvements. This interface focused on allowing users to discover and save outfits that they had the clothing for while also allowing them to upload, tag, and share their own outfits to the community. I was able to accomplish such a small development schedule due to the component library I created, sharing multiple interfaces between separate improvements.",
      preview_image: null,
      images: [],
    },
    cladwell_guidebook: {
      name: "Cladwell\'s Capsule Guidebook - Spring 2016",
      ele: "",
      desc: "A feature to offer Cladwell\'s female Capsules users a way to learn more about the capsuling process and to provide further insight and tips on how to source new clothing items. The module was engineered to automatically index and update the interface based on a file system using Markdown, enabling the marketing to update content on their own schedule without needing resources from development. Created with React JS.",
      preview_image: null,
      images: [],
    },
    cladwell_capsuleCreator: {
      name: "Cladwell\'s Capsule Creation Wizard - Spring 2016",
      desc: "A four step wizard to allow Capsule users to create a new wardrobe to maintain the benefits of an interchangeable wardrobe across multiple locations or seasons. Users would add clothing items needed based off of the events in their lives, then choose a color palette and style that they personally align to. This survey then would send it\'s payload of answers to Cladwell\'s Capsule Generation API and create a new wardrobe accessible to the user. Created with React JS.",
      preview_image: null,
      images: [],
    },
  }
  getProjects() {
    return this.allProjects;
  }
  getProject(UID: any) {
    return this.allProjects[UID];
  }
}
