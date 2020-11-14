import { Component, OnInit } from '@angular/core';

/* Se importan los servicios y los modelos */
import { Leader } from '../../models/leader';
import { LeaderService } from '../../services/leader.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [LeaderService]
})
export class UserComponent implements OnInit {
  /* para mostrar lso objetos de la BD en la vista */
  public leaders:Leader[];
  public url: string;

  constructor(
    private _leaderService: LeaderService
  ){
    this.url = global.url;
  }

  ngOnInit(){
    this.getLeaders();
  }

  /* Método para obtener los usuarios almacenados en la BD */
  getLeaders(){
    this._leaderService.getLeaders().subscribe(
      response => {
        if(response.leaders){
          this.leaders = response.leaders;
        }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

}
