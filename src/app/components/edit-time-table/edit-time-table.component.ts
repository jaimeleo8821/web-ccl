import { Component, OnInit } from '@angular/core';

/* Importar Modelo y Servicio */
import { Horario } from '../../models/horario';
import { HorarioService } from '../../services/horario.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-time-table',
  templateUrl: './edit-time-table.component.html',
  styleUrls: ['./edit-time-table.component.css'],
  providers:[HorarioService]
})
export class EditTimeTableComponent implements OnInit {

  public url: string;
  public title: string;
  public horario: Horario;
  public save_horario;
  public status: string;
  public id: string;

  constructor(
    private _horarioService: HorarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
      this.title = "Editar Horarios de Cultos";
      this.url = global.url;
      this.id = "5faf2ce6d1cf685108e76d7f";
    }

  /* Recoge un parámetro que llega por URL <id del objeto en la BD> y llama al método
     getLeader(id) */
  ngOnInit(){
    this.getHorario(this.id);
  }

  /* Método para obtener los datos almacenados en la BD */
  getHorario(id){
    this._horarioService.getHorario(id).subscribe(
      response => {
        this.horario = response.horario;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(){
    this._horarioService.updateHorario(this.horario).subscribe(
      response => {
        if(response.horario){
          this.save_horario = response.horario;
          this.status = 'success';
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  deleteHorario(id){
    this._horarioService.deleteHorario(id).subscribe(
      response => {
        if(response.horario){
          alert("Horario Eliminado");
          this._router.navigate(['/horarios'])
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
