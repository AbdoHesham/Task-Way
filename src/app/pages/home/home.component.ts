import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ['02.jpg', '04.jpg', '12.jpg'].map((n) => `../../assets/img/photos/${n}`);

  constructor(

  ) { }

  ngOnInit() {
  }



}
