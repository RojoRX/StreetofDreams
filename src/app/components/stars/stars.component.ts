import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  stars: any[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 700; i++) {
      let size = Math.floor(Math.random() * 4) + 1;
      let opacity = (Math.floor(Math.random() * 7) + 3) / 10;
      let blur = Math.floor(Math.random() * 4) + 1;
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      this.stars.push({ size, opacity, blur, x, y });
    }
  }

}