import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = "Donaciones";
  }

  ngOnInit(): void {
  }

}
