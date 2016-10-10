import { Component} from "@angular/core";

@Component({
  selector: "contact",
  styleUrls: ['../shared/scss/contact.scss'],
  template: `
    <div class="contact">
      <h2 class="section-header">Contact Me:</h2>
      <div>
        <label for="email">Email</label>
        <input type="text" required name="email" />
      </div>
      <div>
        <label for="message">message</label>
        <textarea required name="message"></textarea>
      </div>
      <div>
        <button type="submit">Send Message</button>
      </div>
    </div>
  `,
})
export class ContactComponent {

}
