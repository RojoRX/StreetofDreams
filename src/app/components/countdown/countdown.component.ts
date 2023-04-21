import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  countdownDate = new Date('May 5, 2023 00:00:00').getTime();
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  showAnniversaryMessage = false;

  constructor() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      if (distance < 0) {
        this.showAnniversaryMessage = true;
        setTimeout(() => {
          this.showAnniversaryMessage = false;
          this.countdownDate = new Date(this.countdownDate).setFullYear(new Date(this.countdownDate).getFullYear() + 1);
        }, 24 * 60 * 60 * 1000);
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000);
  }
}