import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public ccl: string;
  public mision:string;
  public vision: string;

  constructor() {
    this.title = "¿Quiénes somos?";
    this.ccl = "Comunidad Cristiana de Logroño";
    this.mision = "Nuestra Misión";
    this.vision = "Nuestra Visión";
  }

  ngOnInit(): void {
  }

}
