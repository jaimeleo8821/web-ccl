import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = "Nuestras Redes";
  }

  ngOnInit(): void {
  }

}
