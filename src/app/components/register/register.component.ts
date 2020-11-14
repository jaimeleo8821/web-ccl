import { Component, OnInit } from '@angular/core';

/* Importar Modelo y Servicio */
import { Leader } from '../../models/leader';
import { LeaderService } from '../../services/leader.service';
import { UploadService } from '../../services/upload.service'
import { global } from '../../services/global';

/* providers: carga del Servicio */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LeaderService, UploadService]
})

export class RegisterComponent implements OnInit {
  /* title: título del formulario
     leader: objeto de Leader que srá el objeto que modificará el formulario */
  public title: string;
  public leader: Leader;
  public save_leader;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;

  /* _leaderService: carga las propiedades del servicio */
  constructor(
    private _leaderService: LeaderService,
    private _uploadService: UploadService
  ) {
    this.title = "Registro de Líder";
    this.leader = new Leader('','','',34,'','','','');
    this.url = global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    /* se ejecuta el servicio con el método del API, pasando el objeto a guardar
    con el método subscribe() que recoge lo que devuelve el API:
      response:
      error: devuelve un mensaje por consola si ocurre un error. */
      this._leaderService.saveLeader(this.leader).subscribe(
      response => {
        if(response.leader){

          /* Subir la Imagen */
          this._uploadService.makeFileRequest(this.url+"upload-image/"+response.leader._id, [], this.filesToUpload, 'image')
          .then((result:any) =>{
            this.save_leader = result.leader;
            this.status = 'success';
            form.reset();
          });

        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
