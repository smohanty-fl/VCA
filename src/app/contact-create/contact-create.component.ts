import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService) { }

  ngOnInit() {
    let speech = new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    speech.voice = voices[1];
    //speech.lang = "en-IN";
    speech.text = "Create your contact here";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};

  }
}
