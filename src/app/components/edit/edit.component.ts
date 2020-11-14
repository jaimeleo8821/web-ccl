import { Component, OnInit } from '@angular/core';

/* Importar Modelo y Servicio */
import { Leader } from '../../models/leader';
import { LeaderService } from '../../services/leader.service';
import { UploadService } from '../../services/upload.service'
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../register/register.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [LeaderService, UploadService]
})
export class EditComponent implements OnInit {

  public url: string;
  public title: string;
  public leader: Leader;
  public save_leader;
  public status: string;
  public filesToUpload: Array<File>;

  /* _leaderService: carga las propiedades del servicio */
  constructor(
    private _leaderService: LeaderService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
      this.title = "Editar información del líder";
      this.url = global.url;
    }

  /* Recoge un parámetro que llega por URL <params.id> y llama al método
     getLeader(id) */
  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getLeader(id);
    });
  }

  /*  Llama al servicio para obtener los datos de un único elemento de la BD
      que es un objeto de Lider */
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

  onSubmit(form){
    this._leaderService.updateLeader(this.leader).subscribe(
      response => {
        if(response.leader){
          /* Subir la Imagen */
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(global.url+"upload-image/"+response.leader._id, [], this.filesToUpload, 'image')
            .then((result:any) =>{
              this.save_leader = result.leader;
              this.status = 'success';
            });
          }else{
            this.save_leader = response.leader;
            this.status = 'success';
          }

        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
