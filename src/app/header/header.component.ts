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
        'hello': () => { alert('Hello world!'); },
      'show me contact list': () => { this.zone.run(() => {
        this.router.navigate(['/contact-list']);
    });},
      'show me daily report': () => { alert('opening daily report'); }
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
