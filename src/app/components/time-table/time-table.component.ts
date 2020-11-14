import { Component, OnInit } from '@angular/core';

/* Importar Modelo y Servicio */
import { Horario } from '../../models/horario';
import { HorarioService } from '../../services/horario.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css'],
  providers: [HorarioService]
})
export class TimeTableComponent implements OnInit {

  public url: string;
  public horario:Horario;
  public title: string;
  public formularioRegisto: string;
  public cultoMiercoles: string;
  public cultoViernes: string;
  public cultoSabado: string;
  public cultoDomingo: string;

  /* _leaderService: carga las propiedades del servicio */
  constructor(
    private _horarioService: HorarioService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
      this.url = global.url;
      this.title = "Nuestros Horarios";
      this.cultoMiercoles = "Culto de Sanidad y Milagros";
      this.cultoViernes = "Culto de los viernes";
      this.cultoSabado = "Culto Radical Jóvenes";
      this.cultoDomingo = "Cultos Dominicales";
      this.formularioRegisto = "Fomulario de Registro On-Line";
    }

  /* Recoge un parámetro que llega por URL <params.id> y llama al método
     getLeader(id) */
    ngOnInit(){

      let id = "5faf2ce6d1cf685108e76d7f";
      this.getHorario(id);
    }

  /* Método para obtener los usuarios almacenados en la BD */
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


}
