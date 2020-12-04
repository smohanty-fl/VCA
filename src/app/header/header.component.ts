import { Component, NgZone, OnInit } from '@angular/core';
import * as annyang from '../../assets/js/annyang.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }
  ngOnInit() {
    if (annyang) {
      // Let's define a command.
      const commands = {
      'show me contact list': () => { this.zone.run(() => {
        this.router.navigate(['/contact-list']);
    });},
    'create a contact': () => { this.zone.run(() => {
      this.router.navigate(['/contact-create']);
  });},
  'home': () => { this.zone.run(() => {
    this.router.navigate(['/home']);
});}


      };
    annyang.continuous = true;
      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
  }

  }

// tslint:disable-next-line: align
}
