import { Component, OnInit } from '@angular/core';

/* Se importan los servicios y los modelos */
import { Leader } from '../../models/leader';
import { LeaderService } from '../../services/leader.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [LeaderService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public leader: Leader;
  public confirm: boolean;

  constructor(
    private _leaderService: LeaderService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = global.url;
    this.confirm = false;
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getLeader(id);
    });
  }

  getLeader(id){
    this._leaderService.getLeader(id).subscribe(
      response => {
        this.leader = response.leader;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteLeader(id){
    this._leaderService.deleteLeader(id).subscribe(
      response => {
        if(response.leader){
          alert("Usuario Eliminado");
          this._router.navigate(['/usuario'])
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
