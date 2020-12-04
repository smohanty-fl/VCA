import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts;
  selectedContact;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
    let speech = new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    speech.voice = voices[1];
    //speech.lang = "en-IN";
    speech.text = "Here is your contact list";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
  }
  public selectContact(contact){
    this.selectedContact = contact;
  }
}
