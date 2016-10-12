import { Component} from "@angular/core";
import { BrowserModule }  from '@angular/platform-browser';

import { ContactService } from "../shared/services/contact";

export class MessageModel {
  name: string;
  email: string;
  message: string;
  captcha: string;
};

@Component({
  selector: "contact",
  providers: [ContactService],
  styleUrls: ['../shared/scss/contact.scss'],
  template: `
    <div class="contact">
      <h2>Contact Me</h2>
      <form id="contactArm" class="contact-form" #form="ngForm" (ngSubmit)="onContactSubmit()" *ngIf="showForm">
        <div>
          <label for="Name">Name</label>
          <input type="text" required name="Name" [(ngModel)]="newMessage.name" #name="ngModel" placeholder="Joe Doe" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" required name="email" [(ngModel)]="newMessage.email" #name="ngModel" placeholder="someone@email.com" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea required name="message" [(ngModel)]="newMessage.message"  placeholder="Type your message here..."></textarea>
        </div>
        <div class="captcha">
          <recaptcha class="captcha-frame" (resolved)="resolved($event)" siteKey="6LdK4ggUAAAAAIfsYhJHsLS7fqFlO4l0dGx_oz05" required></recaptcha>
        </div>
        <div>
          <p>{{formMessage}}</p>
          <button type="submit" [disabled]="!form.valid || !captchaValid">Send Message</button>
        </div>
      </form>
    </div>
  `,
})
export class ContactComponent {
  newMessage:MessageModel = new MessageModel();
  showForm:boolean = true;
  activeButton: boolean = false;
  formMessage: string = null;
  private captchaValid = false;
  constructor(private contactService: ContactService) { }
  resolved(captchaResponse: string) {
    this.contactService.verifyCaptcha(captchaResponse)
      .subscribe(
        data => this.captchaValid = data.success,
        error => console.log("Error")
      )
    this.newMessage.captcha = captchaResponse;
    this.activeButton = true;
  }
  onContactSubmit() {
    if (this.captchaValid) {
      this.contactService.sendMessage(this.newMessage)
        .subscribe(
          data => console.dir(data),
          error => console.log("error"),
          () => this.formMessage = "Message sent successfully! Talk to you soon."
        )
      this.newMessage = new MessageModel();
    } else {
      this.formMessage = "Please use the reCAPTCHA in order to send a message"
    }
  };
}
