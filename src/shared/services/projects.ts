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
      desc: `<p>Christmas holiday marketing project in order to provide a free service to recommend fashion items for men based on their body attributes and fashion goals, targeting those who would buy our target audience a present and introduce them to Cladwell’s services.</p>
      <p>Charged with constructing the entire application, cocreated designs to create an interactive and mobile-friendly web application that ties directly into Cladwell’s APIs within 10 working days.</p>`,
      highlights: ["CSS-only solution to mimic the Pinterest layout of non-normalized product heights", "Dynamic loading of API response data, allowing the user to tweak their survey inputs to load more accurate product links", "URL encoding of survey data allowed users to share results and bookmark to return to later"],
      preview_image: "./src/shared/img/projects/giftfinder0.png",
      images: [
        {title: "Prototype", desc: "Tasked with coming up with the interface for the Men's Gift Finder, I created a low fidelity prototype to introduce managament to what needed to be created.", url: "./src/shared/img/projects/giftfinder1.png"},
        {title: "Survey", desc: "Step 1 of the two step process for creating a Gift List. A user would enter details about the man they are shopping for within this interactive survey in order for Cladwell's algorithms to find the items that would best match.", url: "./src/shared/img/projects/giftfinder2.png"},
        {title: "Results", desc: "Step 2 displayed preview images and product information to the user based on their previous answers. ", url: "./src/shared/img/projects/giftfinder3.png"}
      ],
    },
    cladwell_capsules: {
      name: "Women's Capsules",
      skills: ["ReactJS", "HTML5", "CSS3", "MySQL"],
      time: "",
      owner: "Cladwell",
      ele: "React Web App to help women manage their style and clothing.",
      desc: `<p>Created to expand Cladwell’s product offering to the needs of women, Capsules focused on a process of self-creating capsule wardrobes and providing education for best practices with purchasing and maintaining.</p>
      <p>In control of the entire user experience, build an interface that allowed the creation of fully custom capsule wardrobes while providing touch-points for users to navigate to a education section without losing progress.</p>`,
      highlights: ["Allowed users to manipulate data in order to customize their capsules to fit their everyday needs, automatically saving progress", "Leveraged React’s Virtual DOM in order to only change necessary elements"],
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
    coupsmart_smartDeals: {
      name: "Coupons on Facebook",
      skills: ["PHP", "JQuery", "MySQL", "CSS3"],
      time: "",
      owner: "CoupSmart",
      ele: "Digital marketing tool to deliver printable coupons to Facebook Fans.",
      highlights: ["Over 1 MM page views and 100K+ active users", "Hosted hundreds of coupon campaigns", "Allowed versatility of deliverable content by leveraging JQuery, email, or CoupSmart’s dynamic image generation to deliver any asset the client needed"],
      desc: `<p>CoupSmart’s flagship product, allows for the distribution of online printable coupons after you “like” or share a promotion with a friend.</p><p>Tasked with creating a very versatile web app that is loaded within Facebook that can be customized to fit any branding without sacrificing usability for the end user. Uses CoupSmart’s API to render and trigger the printing of coupons.</p>`,
      preview_image: "./src/shared/img/projects/smartdeals0.jpg",
      images: [
        {title: "Layout", desc: "Smart Deals was created to be completely customizable, only providing a basic theme to help promote information heirarchy. Each element could be overwritten with custom styling or, by providing some basic variables, automatically change it's styles to match the client's branding.", url: "./src/shared/img/projects/smartdeals1.jpg"},
        {title: "Live Promotion", desc: "An example of the app's flexibility and customization. This allowed for clients to only provide the level of work that they wanted for a campaign while keeping the interface friendly and consistant for consumers.", url: "./src/shared/img/projects/smartdeals2.jpg"}
      ],
    },
    coupsmart_actNaturalTour: {
      name: "Act Natural Tour",
      skills: ["Photoshop"],
      time: "",
      owner: "CoupSmart",
      ele: "Quick creation of assets and ticket distribution of nation-wide concert series.",
      desc: `<p>Natural Light was hosting a summer multi-city concert series, and was looking for a technology partner to distribute tickets.</p><p>Leading the CoupSmart design team, full assets were created for the concert within 72 hours from a single magazine advert art file. Not only were the assets used for the CoupSmart applications, but the branding developed was used by Natural Light for all other concert ads.</p>`,
      preview_image: "./src/shared/img/projects/actnatural0.jpg",
      images: [
        {title: "Mobile Offers", desc: "Mobile-specific web application that ran in conjunction with their Facebook Smart Deal. Mirrored the same functionality to allow mobile users to redeem without being blocked by Facebook's mobile restrictions with apps at the time.", url: "./src/shared/img/projects/actnatural1.jpg"},
        {title: "Like Gate", desc: "The Smart Deals application incentivied sonsumers to like a client's Facebook Page.", url: "./src/shared/img/projects/actnatural3.jpg"},
        {title: "Offer Page", desc: "Created multiple asset packages to adjust with Natural Light's shift in objectives. Their promotion was prepared to handle a printable concert ticket, downloadable list of event times and dates, and then finally a chance to win a Facebook Fan Raffle.", url: "./src/shared/img/projects/actnatural2.jpg"}
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
    cladwell_Roadmap: {
      name: "Men’s Wardrobe",
      skills: ["HTML5", "AngularJS 1", "noSQL", "CSS3"],
      time: "",
      owner: "Cladwell",
      ele: "Men's style and fashion advice app using AngularJS.",
      desc: `<p>Cladwell’s initial product, providing men with an online management tool for their style and wardrobe. This web application recommends clothing and provides clothing items to purchase, both click-thru and e-commerce solutions.</p><p>Focused on development of the interface, working with the CEO and department heads to create new features. Provided optimizations to performance and user interfaces in order to work best on all devices as well as ongoing maintenance.</p>`,
      highlights: ["Customized consumer dashboards that would load the latest fashion items as well as aid in searching for specific items", "Mobile optimized layout automatically resized elements based on physical screen size", "Receive and manipulate payload of data from user’s account generation, allowing users to save changes to their wardrobe"],
      preview_image: "./src/shared/img/projects/roadmap0.jpg",
      images: [
        {title: "Dashboard", desc: "The main interface for Cladwell's male user accounts, created to be modular and accept new components as seemlessly as possible to test new business approaches.", url: "./src/shared/img/projects/roadmap2.jpg"},
        {title: "Wardrobe", desc: "Each season, Cladwell provides men with an updated list of clothing they need to have. The Wardrobe list allows users to click on a item description to check it off their list or to be recommended online products that match their style.", url: "./src/shared/img/projects/roadmap3.jpg"},
        {title: "Product Recommendations", desc: "Cladwell provides 3 recommendations per wardrobe item, and then multiple pricepoints.", url: "./src/shared/img/projects/roadmap4.jpg"},
        {title: "Style Analytics", desc: "Mobile-optimized style guide customized to the user's profile. Created the front-end interface with only a desktop reference of the top half of the page within a week.", url: "./src/shared/img/projects/roadmap1.png"}
      ],
    },
    coupsmart_clientPortal: {
      name: "Client Portal",
      skills: ["PHP", "JQuery", "MySQL", "CSS3"],
      time: "",
      owner: "CoupSmart",
      ele: "Quick snapshot of users to see the success of their marketing campaigns and take action.",
      desc: `<p>CoupSmart’s focus was to allow their clients to create their own digital marketing campaigns on Facebook and give them the tools to monitor it’s success.</p><p>Designed and developed a customer portal to help clients see real-time performance of their campaigns and start new ones.</p>`,
      highlights: ["Utilized the Plot Library to render dynamic graphs to illustrate success metrics","Modular design allows for new features and updates to be easily incorporated into the portal","Mobile optimized to allow the use of any device to see campaign statics"],
      preview_image: "./src/shared/img/projects/clientportal0.jpg",
      images: [
        {title: "", desc: "", url: "./src/shared/img/projects/clientportal1.jpg"},
        {title: "", desc: "", url: "./src/shared/img/projects/clientportal2.jpg"}
      ],
    },
  }
  public hiddenProjects = {
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
      highlights: [],
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
