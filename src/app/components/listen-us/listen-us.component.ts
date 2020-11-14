import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen-us',
  templateUrl: './listen-us.component.html',
  styleUrls: ['./listen-us.component.css']
})
export class ListenUsComponent implements OnInit {
  public title: string;
  public youtube: string;
  public facebook: string;

  constructor() {
    this.title = "Síguenos en nuestras redes";
    this.youtube = "Nuestro Canal de YouTube";
    this.facebook = "Nuestra Página de Facebook";
  }

  ngOnInit(): void {
  }

}
