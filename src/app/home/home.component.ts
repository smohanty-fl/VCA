import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let speech = new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    speech.voice = voices[1];
    //speech.lang = "en-IN";
    speech.text = "You are at home now";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speechSynthesis.speak(speech);
  }

}
